from rest_framework import serializers

from ..models import (
    AdvertCar,
    CarImages,
)


class CarImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = CarImages
        fields = ('id','image',)


class CarSerializer(serializers.ModelSerializer):
    images = CarImageSerializer(
        many=True,
        required=False
    )

    class Meta:
        model = AdvertCar
        fields = '__all__'
    
    def create(self, validated_data):

        if 'images' in validated_data:
            images = validated_data.pop('images')
            advert = AdvertCar.objects.create(**validated_data)
            for img in images:
                CarImages.objects.create(**img, post=advert)
            return advert
        
        if 'images' not in validated_data:
            advert = AdvertCar.objects.create(**validated_data)
            return advert