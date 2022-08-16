from rest_framework import serializers

from ..models import (
    AdvertRemont,
    RemontImages,
)


class RemontImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = RemontImages
        fields = ('id','image',)


class RemontSerializer(serializers.ModelSerializer):
    images = RemontImageSerializer(
        many=True,
        required=False
    )
    image = serializers.SerializerMethodField()

    class Meta:
        model = AdvertRemont
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
            advert = AdvertRemont.objects.create(**validated_data)
            for img in images:
                RemontImages.objects.create(**img, post=advert)
        else:
            advert = AdvertRemont.objects.create(**validated_data)
        advert.slug = 'remont'
        advert.uluus.set(uluuses)
        advert.save(update_fields=["slug"])

        return advert
    
    @staticmethod
    def get_image(obj):
        return RemontImageSerializer(
            RemontImages.objects.filter(post_id=obj.id),
            many=True
        ).data