from rest_framework import serializers

from ..models import (
    AdvertRent,
    RentImages,
)


class RentImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = RentImages
        fields = ('id','image',)


class RentSerializer(serializers.ModelSerializer):
    images = RentImageSerializer(
        many=True,
        required=False
    )
    image = serializers.SerializerMethodField()

    class Meta:
        model = AdvertRent
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
        if 'images' in validated_data:
            images = validated_data.pop('images')
            for img in images:
                RentImages.objects.create(**img, post=advert)
        else:
            advert = AdvertRent.objects.create(**validated_data)
        advert.slug = f'rent/{advert.id}/'
        advert.uluus.set(uluuses)

        return advert
    
    @staticmethod
    def get_image(obj):
        return RentImageSerializer(
            RentImages.objects.filter(post=obj),
            many=True
        ).data
