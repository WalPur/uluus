from rest_framework import serializers

from ..models import (
    Uluss
)


class UluusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Uluss
        fields = '__all__'