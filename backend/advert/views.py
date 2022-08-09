from rest_framework import viewsets

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