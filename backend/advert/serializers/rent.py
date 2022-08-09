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
        fields = '__all__'
    
    def create(self, validated_data):

        if 'images' in validated_data:
            images = validated_data.pop('images')
            advert = AdvertRent.objects.create(**validated_data)
            for img in images:
                RentImages.objects.create(**img, post=advert)
            return advert
        
        if 'images' not in validated_data:
            advert = AdvertRent.objects.create(**validated_data)
            return advert
    
    @staticmethod
    def get_image(obj):
        return RentImageSerializer(
            RentImages.objects.filter(post=obj),
            many=True
        ).data
