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
    image = serializers.SerializerMethodField()

    class Meta:
        model = AdvertCar
        fields = '__all__'
    
    def create(self, validated_data):

        if 'images' in validated_data:
            images = validated_data.pop('images')
            uluuses = validated_data.pop('uluus')
            advert = AdvertCar.objects.create(**validated_data)
            advert.uluus.set(uluuses)
            for img in images:
                CarImages.objects.create(**img, post=advert)
            return advert
        
        if 'images' not in validated_data:
            uluuses = validated_data.pop('uluus')
            advert = AdvertCar.objects.create(**validated_data)
            advert.uluus.set(uluuses)
            return advert
    
    @staticmethod
    def get_image(obj):
        return CarImageSerializer(
            CarImages.objects.filter(post=obj),
            many=True
        ).data