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
            "transmission",
            "drive_unit",
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
            advert = AdvertCar.objects.create(**validated_data)
            for img in images:
                CarImages.objects.create(**img, post=advert)
        else:
            advert = AdvertCar.objects.create(**validated_data)
        advert.slug = f'car/{advert.id}/'
        advert.uluus.set(uluuses)
        advert.save(update_fields=["slug"])
        
        return advert
    
    @staticmethod
    def get_image(obj):
        return CarImageSerializer(
            CarImages.objects.filter(post=obj.id),
            many=True
        ).data