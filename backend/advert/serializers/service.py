from rest_framework import serializers

from ..models import (
    AdvertService,
    ServiceImages,
)


class ServiceImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ServiceImages
        fields = ('id','image',)


class ServiceSerializer(serializers.ModelSerializer):
    images = ServiceImageSerializer(
        many=True,
        required=False
    )
    image = serializers.SerializerMethodField()

    class Meta:
        model = AdvertService
        fields = (
            "id",
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
            advert = AdvertService.objects.create(**validated_data)
            for img in images:
                ServiceImages.objects.create(**img, post=advert)
        else:
            advert = AdvertService.objects.create(**validated_data)
        advert.slug = 'service'
        advert.uluus.set(uluuses)
        advert.save(update_fields=["slug"])

        return advert
    
    @staticmethod
    def get_image(obj):
        return ServiceImageSerializer(
            ServiceImages.objects.filter(post=obj.id),
            many=True
        ).data