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
        fields = '__all__'
    
    def create(self, validated_data):

        if 'images' in validated_data:
            images = validated_data.pop('images')
            uluuses = validated_data.pop('uluus')
            advert = AdvertHome.objects.create(**validated_data)
            advert.uluus.set(uluuses)
            for img in images:
                HomeImages.objects.create(**img, post=advert)
            return advert
        
        if 'images' not in validated_data:
            uluuses = validated_data.pop('uluus')
            advert = AdvertHome.objects.create(**validated_data)
            advert.uluus.set(uluuses)
            return advert

    @staticmethod
    def get_image(obj):
        return HomeImageSerializer(
            HomeImages.objects.filter(post=obj),
            many=True
        ).data
