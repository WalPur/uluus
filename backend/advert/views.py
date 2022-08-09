import re
from rest_framework import viewsets, generics
from rest_framework.response import Response

from .models import (
    AdvertRent,
    AdvertCar,
    AdvertService,
    AdvertHome,
    AdvertFood,
    AdvertJobs,
    RentImages,
    CarImages,
    ServiceImages,
    HomeImages,
    FoodImages,
    JobsImages,
    Uluss
)

from .serializers import (
    car,
    food,
    home,
    jobs,
    rent,
    service
)


class formRent(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    queryset = AdvertRent.objects.all()
    serializer_class = rent.RentSerializer


class formCar(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    queryset = AdvertCar.objects.all()
    serializer_class = car.CarSerializer


class formService(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    queryset = AdvertService.objects.all()
    serializer_class = service.ServiceSerializer


class formHome(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    queryset = AdvertHome.objects.all()
    serializer_class = home.HomeSerializer


class formFood(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    queryset = AdvertFood.objects.all()
    serializer_class = food.FoodSerializer


class formJobs(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    queryset = AdvertJobs.objects.all()
    serializer_class = jobs.JobsSerializer


class formAll(generics.GenericAPIView):
    def get(self, request, *args, **kwargs):

        context = {
            'request': request,
        }

        rent_serializer = rent.RentSerializer(
            AdvertRent.objects.all(),
            many=True, 
            context=context
        )
        car_serializer = car.CarSerializer(
            AdvertCar.objects.all(),
            many=True, 
            context=context
        )
        service_serializer = service.ServiceSerializer(
            AdvertService.objects.all(),
            many=True, 
            context=context
        )
        home_serializer = home.HomeSerializer(
            AdvertHome.objects.all(),
            many=True, 
            context=context
        )
        food_serializer = food.FoodSerializer(
            AdvertFood.objects.all(),
            many=True, 
            context=context
        )
        jobs_serializer = jobs.JobsSerializer(
            AdvertJobs.objects.all(),
            many=True, 
            context=context
        )

        response = sorted(
            rent_serializer.data + 
            car_serializer.data +
            service_serializer.data +
            home_serializer.data +
            food_serializer.data +
            jobs_serializer.data,
            key=lambda d: d['date']
        )

        return Response(response)
