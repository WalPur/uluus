from rest_framework import serializers

from ..models import (
    AdvertHome,
    HomeImages,
)


class HomeImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = HomeImages
        fields = ('id','image',)


class HomeSerializer(serializers.ModelSerializer):
    images = HomeImageSerializer(
        many=True,
        required=False
    )

    class Meta:
        model = AdvertHome
        fields = '__all__'
    
    def create(self, validated_data):

        if 'images' in validated_data:
            images = validated_data.pop('images')
            advert = AdvertHome.objects.create(**validated_data)
            for img in images:
                HomeImages.objects.create(**img, post=advert)
            return advert
        
        if 'images' not in validated_data:
            advert = AdvertHome.objects.create(**validated_data)
            return advert
