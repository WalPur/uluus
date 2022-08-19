from rest_framework import serializers

from ..models import (
    Advert,
    AdvertImages,
)


class RemontImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = AdvertImages
        fields = ('id','image',)


class RemontSerializer(serializers.ModelSerializer):
    images = RemontImageSerializer(
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
            "subcategory",
            "action",
            "is_premium",
            "premium_link",
            "slug",
            "views",
            "date",
        )
    
    def create(self, validated_data):

        uluuses = validated_data.pop('uluus')
        if 'images' in validated_data:
            images = validated_data.pop('images')
            advert = Advert.objects.create(**validated_data)
            for img in images:
                AdvertImages.objects.create(**img, post=advert)
        else:
            advert = Advert.objects.create(**validated_data)
        advert.slug = 'remont'
        advert.uluus.set(uluuses)
        advert.save(update_fields=["slug"])

        return advert
    
    @staticmethod
    def get_image(obj):
        return RemontImageSerializer(
            AdvertImages.objects.filter(post_id=obj.id),
            many=True
        ).data
