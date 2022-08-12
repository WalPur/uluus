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
            advert = AdvertFood.objects.create(**validated_data)
            for img in images:
                FoodImages.objects.create(**img, post=advert)
        else:
            advert = AdvertFood.objects.create(**validated_data)
        advert.slug = f'rent/{advert.id}/'
        advert.uluus.set(uluuses)
        
        return advert

    @staticmethod
    def get_image(obj):
        return FoodImageSerializer(
            FoodImages.objects.filter(post=obj),
            many=True
        ).data