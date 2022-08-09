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
        fields = '__all__'
    
    def create(self, validated_data):

        if 'images' in validated_data:
            images = validated_data.pop('images')
            uluuses = validated_data.pop('uluus')
            advert = AdvertJobs.objects.create(**validated_data)
            advert.uluus.set(uluuses)
            for img in images:
                JobsImages.objects.create(**img, post=advert)
            return advert
        
        if 'images' not in validated_data:
            uluuses = validated_data.pop('uluus')
            advert = AdvertJobs.objects.create(**validated_data)
            advert.uluus.set(uluuses)
            return advert

    @staticmethod
    def get_image(obj):
        return JobImageSerializer(
            JobsImages.objects.filter(post=obj),
            many=True
        ).data