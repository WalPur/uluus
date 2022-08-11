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
    service,
    uluus
)


class formUluus(viewsets.ModelViewSet):
    http_method_names = ['get']
    queryset = Uluss.objects.all()
    serializer_class = uluus.UluusSerializer


class formRent(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = rent.RentSerializer

    def get_queryset(self):
        user_uluus = self.request.GET.get("uluus", "")
        if user_uluus != "":
            response = AdvertRent.objects.filter(uluus=user_uluus).order_by('date')
        else:
            response = AdvertRent.objects.all().order_by('date')
        return response


class formCar(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = car.CarSerializer

    def get_queryset(self):
        user_uluus = self.request.GET.get("uluus", "")
        if user_uluus != "":
            response = AdvertCar.objects.filter(uluus=user_uluus).order_by('date')
        else:
            response = AdvertCar.objects.all().order_by('date')
        return response


class formService(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = service.ServiceSerializer

    def get_queryset(self):
        user_uluus = self.request.GET.get("uluus", "")
        if user_uluus != "":
            response = AdvertService.objects.filter(uluus=user_uluus).order_by('date')
        else:
            response = AdvertService.objects.all().order_by('date')
        return response


class formHome(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    queryset = AdvertHome.objects.all().order_by('date')
    serializer_class = home.HomeSerializer

    def get_queryset(self):
        user_uluus = self.request.GET.get("uluus", "")
        if user_uluus != "":
            response = AdvertHome.objects.filter(uluus=user_uluus).order_by('date')
        else:
            response = AdvertHome.objects.all().order_by('date')
        return response


class formFood(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = food.FoodSerializer

    def get_queryset(self):
        user_uluus = self.request.GET.get("uluus", "")
        if user_uluus != "":
            response = AdvertFood.objects.filter(uluus=user_uluus).order_by('date')
        else:
            response = AdvertFood.objects.all().order_by('date')
        return response


class formJobs(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    queryset = AdvertJobs.objects.all().order_by('date')
    serializer_class = jobs.JobsSerializer

    def get_queryset(self):
        user_uluus = self.request.GET.get("uluus", "")
        if user_uluus != "":
            response = AdvertJobs.objects.filter(uluus=user_uluus).order_by('date')
        else:
            response = AdvertJobs.objects.all().order_by('date')
        return response


class formPremium(generics.GenericAPIView):

    queryset = ''

    def get(self, request, *args, **kwargs):

        context = {
            'request': request,
        }

        rent_serializer = rent.RentSerializer(
            AdvertRent.objects.filter(is_premium=True),
            many=True, 
            context=context
        )
        car_serializer = car.CarSerializer(
            AdvertCar.objects.filter(is_premium=True),
            many=True, 
            context=context
        )
        service_serializer = service.ServiceSerializer(
            AdvertService.objects.filter(is_premium=True),
            many=True, 
            context=context
        )
        home_serializer = home.HomeSerializer(
            AdvertHome.objects.filter(is_premium=True),
            many=True, 
            context=context
        )
        food_serializer = food.FoodSerializer(
            AdvertFood.objects.filter(is_premium=True),
            many=True, 
            context=context
        )
        jobs_serializer = jobs.JobsSerializer(
            AdvertJobs.objects.filter(is_premium=True),
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


class formAll(generics.GenericAPIView):

    queryset = ''
    
    def get(self, request, *args, **kwargs):

        context = {
            'request': request,
        }

        rent_serializer = rent.RentSerializer(
            AdvertRent.objects.filter(is_premium=False),
            many=True, 
            context=context
        )
        car_serializer = car.CarSerializer(
            AdvertCar.objects.filter(is_premium=False),
            many=True, 
            context=context
        )
        service_serializer = service.ServiceSerializer(
            AdvertService.objects.filter(is_premium=False),
            many=True, 
            context=context
        )
        home_serializer = home.HomeSerializer(
            AdvertHome.objects.filter(is_premium=False),
            many=True, 
            context=context
        )
        food_serializer = food.FoodSerializer(
            AdvertFood.objects.filter(is_premium=False),
            many=True, 
            context=context
        )
        jobs_serializer = jobs.JobsSerializer(
            AdvertJobs.objects.filter(is_premium=False),
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
