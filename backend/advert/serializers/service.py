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
        fields = '__all__'
    
    def create(self, validated_data):

        if 'images' in validated_data:
            images = validated_data.pop('images')
            uluuses = validated_data.pop('uluus')
            advert = AdvertService.objects.create(**validated_data)
            advert.uluus.set(uluuses)
            for img in images:
                ServiceImages.objects.create(**img, post=advert)
            return advert
        
        if 'images' not in validated_data:
            uluuses = validated_data.pop('uluus')
            advert = AdvertService.objects.create(**validated_data)
            advert.uluus.set(uluuses)
            return advert
    
    @staticmethod
    def get_image(obj):
        return ServiceImageSerializer(
            ServiceImages.objects.filter(post=obj),
            many=True
        ).data