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
            advert = AdvertFood.objects.create(**validated_data)
            for img in images:
                FoodImages.objects.create(**img, post=advert)
            return advert
        
        if 'images' not in validated_data:
            advert = AdvertFood.objects.create(**validated_data)
            return advert

    @staticmethod
    def get_image(obj):
        return FoodImageSerializer(
            FoodImages.objects.filter(post=obj),
            many=True
        ).data