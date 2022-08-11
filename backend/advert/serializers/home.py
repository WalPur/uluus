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
    image = serializers.SerializerMethodField()

    class Meta:
        model = AdvertHome
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
            "date",
        )
    
    def create(self, validated_data):

        uluuses = validated_data.pop('uluus')
        advert = AdvertHome.objects.create(**validated_data)
        advert.uluus.set(uluuses)

        if 'images' in validated_data:
            images = validated_data.pop('images')
            for img in images:
                HomeImages.objects.create(**img, post=advert)
        
        return advert

    @staticmethod
    def get_image(obj):
        return HomeImageSerializer(
            HomeImages.objects.filter(post=obj),
            many=True
        ).data
