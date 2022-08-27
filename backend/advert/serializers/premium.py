from rest_framework import serializers
from rest_framework.serializers import ImageField

from ..models import (
    Advert,
    AdvertImages,
)


class ImageSerializer(serializers.ModelSerializer):
    image = ImageField(read_only=True, source='window')

    class Meta:
        model = AdvertImages
        fields = ('id', 'image')


class Serializer(serializers.ModelSerializer):
    images = ImageSerializer(
        many=True,
        required=False
    )
    image = serializers.SerializerMethodField()

    class Meta:
        model = Advert
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
            "improvement",
            "subcategory",
            "action",
            "is_premium",
            "premium_link",
            "slug",
            "views",
            "date",
        )
    
    @staticmethod
    def get_image(obj):
        return ImageSerializer(
            AdvertImages.objects.filter(post=obj.id),
            many=True
        ).data