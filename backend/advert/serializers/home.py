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
            advert = AdvertHome.objects.create(**validated_data)
            for img in images:
                HomeImages.objects.create(**img, post=advert)
        else:
            advert = AdvertHome.objects.create(**validated_data)
        advert.slug = 'home'
        advert.uluus.set(uluuses)
        advert.save(update_fields=["slug"])
        
        return advert

    @staticmethod
    def get_image(obj):
        return HomeImageSerializer(
            HomeImages.objects.filter(post=obj.id),
            many=True
        ).data
