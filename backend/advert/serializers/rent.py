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
            "improvement",
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
            advert = AdvertRent.objects.create(**validated_data)
            for img in images:
                RentImages.objects.create(**img, post=advert)
        else:
            advert = AdvertRent.objects.create(**validated_data)
        advert.slug = 'rent'
        advert.uluus.set(uluuses)
        advert.save(update_fields=["slug"])

        return advert
    
    @staticmethod
    def get_image(obj):
        return RentImageSerializer(
            RentImages.objects.filter(post_id=obj.id),
            many=True
        ).data
