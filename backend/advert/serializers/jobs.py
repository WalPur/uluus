from rest_framework import serializers

from ..models import (
    AdvertJobs,
    JobsImages,
)


class JobImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobsImages
        fields = ('id','image',)


class JobsSerializer(serializers.ModelSerializer):
    images = JobImageSerializer(
        many=True,
        required=False
    )
    image = serializers.SerializerMethodField()

    class Meta:
        model = AdvertJobs
        fields = (
            "name",
            "description",
            "images",
            "image",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "uluus",
            "price",
            "category",
            "action",
            "is_premium",
            "slug",
            "views",
            "date",
        )
    
    def create(self, validated_data):

        uluuses = validated_data.pop('uluus')
        if 'images' in validated_data:
            images = validated_data.pop('images')
            advert = AdvertJobs.objects.create(**validated_data)
            for img in images:
                JobsImages.objects.create(**img, post=advert)
        else:
            advert = AdvertJobs.objects.create(**validated_data)
        advert.slug = f'jobs/{advert.id}/'
        advert.uluus.set(uluuses)
        advert.save(update_fields=["slug"])

        return advert

    @staticmethod
    def get_image(obj):
        return JobImageSerializer(
            JobsImages.objects.filter(post=obj),
            many=True
        ).data