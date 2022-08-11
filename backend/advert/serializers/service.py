from rest_framework import serializers

from ..models import (
    AdvertService,
    ServiceImages,
)


class ServiceImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ServiceImages
        fields = ('id','image',)


class ServiceSerializer(serializers.ModelSerializer):
    images = ServiceImageSerializer(
        many=True,
        required=False
    )
    image = serializers.SerializerMethodField()

    class Meta:
        model = AdvertService
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
        advert = AdvertService.objects.create(**validated_data)
        advert.slug = f'service/{advert.id}/'
        advert.uluus.set(uluuses)

        if 'images' in validated_data:
            images = validated_data.pop('images')
            for img in images:
                ServiceImages.objects.create(**img, post=advert)
        
        return advert
    
    @staticmethod
    def get_image(obj):
        return ServiceImageSerializer(
            ServiceImages.objects.filter(post=obj),
            many=True
        ).data
