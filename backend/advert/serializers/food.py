from rest_framework import serializers

from ..models import (
    AdvertFood,
    FoodImages,
)


class FoodImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = FoodImages
        fields = ('id','image',)


class FoodSerializer(serializers.ModelSerializer):
    images = FoodImageSerializer(
        many=True,
        required=False
    )
    image = serializers.SerializerMethodField()

    class Meta:
        model = AdvertFood
        fields = '__all__'
    
    def create(self, validated_data):

        if 'images' in validated_data:
            images = validated_data.pop('images')
            uluuses = validated_data.pop('uluus')
            advert = AdvertFood.objects.create(**validated_data)
            advert.uluus.set(uluuses)
            for img in images:
                FoodImages.objects.create(**img, post=advert)
            return advert
        
        if 'images' not in validated_data:
            uluuses = validated_data.pop('uluus')
            advert = AdvertFood.objects.create(**validated_data)
            advert.uluus.set(uluuses)
            return advert

    @staticmethod
    def get_image(obj):
        return FoodImageSerializer(
            FoodImages.objects.filter(post=obj),
            many=True
        ).data