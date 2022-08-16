from django.db.models import F, Q
from rest_framework import viewsets, generics
from rest_framework.response import Response
from drf_multiple_model.views import FlatMultipleModelAPIView
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from rest_framework.pagination import PageNumberPagination


from .models import (
    AdvertRent,
    AdvertCar,
    AdvertService,
    AdvertHome,
    AdvertFood,
    AdvertJobs,
    AdvertRemont,
    Uluss
)

from .serializers import (
    car,
    food,
    home,
    jobs,
    rent,
    service,
    remont,
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
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return AdvertRent.objects.filter(Q(uluus__id__in=uluuses)).order_by('date')
        else:
            return AdvertRent.objects.all().order_by('date')


class formCar(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = car.CarSerializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return AdvertCar.objects.filter(Q(uluus__id__in=uluuses)).order_by('date')
        else:
            return AdvertCar.objects.all().order_by('date')


class formService(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = service.ServiceSerializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return AdvertService.objects.filter(Q(uluus__id__in=uluuses)).order_by('date')
        else:
            return AdvertService.objects.all().order_by('date')


class formHome(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = home.HomeSerializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return AdvertHome.objects.filter(Q(uluus__id__in=uluuses)).order_by('date')
        else:
            return AdvertHome.objects.all().order_by('date')


class formFood(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = food.FoodSerializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return AdvertFood.objects.filter(Q(uluus__id__in=uluuses)).order_by('date')
        else:
            return AdvertFood.objects.all().order_by('date')


class formJobs(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = jobs.JobsSerializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return AdvertJobs.objects.filter(Q(uluus__id__in=uluuses)).order_by('date')
        else:
            return AdvertJobs.objects.all().order_by('date')

class formRemont(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = remont.RemontSerializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return AdvertRemont.objects.filter(Q(uluus__id__in=uluuses)).order_by('date')
        else:
            return AdvertRemont.objects.all().order_by('date')


class LimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 5
    max_limit = 50
    min_limit = 1
    min_offset = 1
    max_offset = 50


def name_content_with_letter(queryset, request, q, *args, **kwargs):
    query = q
    uluuses = request.GET.get("uluus", "")
    if uluuses != "":
        uluuses = set(map(int, request.GET.get("uluus", "").split(',')))
        return queryset.filter((Q(name__icontains=query) | Q(description__icontains=query)) & Q(uluus__id__in=uluuses))
    else:
        return queryset.filter(Q(name__icontains=query) | Q(description__icontains=query))


def name_content_with_no_letter(queryset, request, *args, **kwargs):
    uluuses = request.GET.get("uluus", "")
    if uluuses != "":
        uluuses = set(map(int, request.GET.get("uluus", "").split(',')))
        return queryset.filter(Q(uluus__id__in=uluuses))
    else:
        return queryset.all()



class formSearch(FlatMultipleModelAPIView):
    sorting_fields = ['-date']
    pagination_class = LimitPagination
    querylist = [
        {
            'queryset': AdvertRent.objects.filter(is_premium=False),
            'serializer_class': rent.RentSerializer,
            'filter_fn': name_content_with_letter
        },
        {
            'queryset': AdvertCar.objects.filter(is_premium=False),
            'serializer_class': car.CarSerializer,
            'filter_fn': name_content_with_letter
        },
        {
            'queryset': AdvertService.objects.filter(is_premium=False),
            'serializer_class': service.ServiceSerializer,
            'filter_fn': name_content_with_letter
        },
        {
            'queryset': AdvertHome.objects.filter(is_premium=False),
            'serializer_class': home.HomeSerializer,
            'filter_fn': name_content_with_letter
        },
        {
            'queryset': AdvertFood.objects.filter(is_premium=False),
            'serializer_class': food.FoodSerializer,
            'filter_fn': name_content_with_letter
        },
        {
            'queryset': AdvertJobs.objects.filter(is_premium=False),
            'serializer_class': jobs.JobsSerializer,
            'filter_fn': name_content_with_letter
        },
    ]


class formAll(FlatMultipleModelAPIView):
    sorting_fields = ['-date']
    pagination_class = LimitPagination
    querylist = [
        {
            'queryset': AdvertRent.objects.filter(is_premium=False),
            'serializer_class': rent.RentSerializer,
            'filter_fn': name_content_with_no_letter
        },
        {
            'queryset': AdvertCar.objects.filter(is_premium=False),
            'serializer_class': car.CarSerializer,
            'filter_fn': name_content_with_no_letter
        },
        {
            'queryset': AdvertService.objects.filter(is_premium=False),
            'serializer_class': service.ServiceSerializer,
            'filter_fn': name_content_with_no_letter
        },
        {
            'queryset': AdvertHome.objects.filter(is_premium=False),
            'serializer_class': home.HomeSerializer,
            'filter_fn': name_content_with_no_letter
        },
        {
            'queryset': AdvertFood.objects.filter(is_premium=False),
            'serializer_class': food.FoodSerializer,
            'filter_fn': name_content_with_no_letter
        },
        {
            'queryset': AdvertJobs.objects.filter(is_premium=False),
            'serializer_class': jobs.JobsSerializer,
            'filter_fn': name_content_with_no_letter
        },
    ]


class formPremium(FlatMultipleModelAPIView):
    sorting_fields = ['-date']
    pagination_class = LimitPagination
    querylist = [
        {'queryset': AdvertRent.objects.filter(is_premium=True), 'serializer_class': rent.RentSerializer},
        {'queryset': AdvertCar.objects.filter(is_premium=True), 'serializer_class': car.CarSerializer},
        {'queryset': AdvertService.objects.filter(is_premium=True), 'serializer_class': service.ServiceSerializer},
        {'queryset': AdvertHome.objects.filter(is_premium=True), 'serializer_class': home.HomeSerializer},
        {'queryset': AdvertFood.objects.filter(is_premium=True), 'serializer_class': food.FoodSerializer},
        {'queryset': AdvertJobs.objects.filter(is_premium=True), 'serializer_class': jobs.JobsSerializer},
    ]


class formRentId(generics.GenericAPIView):

    queryset = ''
    
    def get(self, request, id, *args, **kwargs):

        context = {
            'request': request,
        }

        query = AdvertRent.objects.filter(id=id)
        query.update(views = F("views") + 1)
        
        rent_serializer = rent.RentSerializer(
            query,
            many=True, 
            context=context
        ).data

        return Response(rent_serializer)


class formCarId(generics.GenericAPIView):

    queryset = ''
    
    def get(self, request, id, *args, **kwargs):

        context = {
            'request': request,
        }

        query = AdvertCar.objects.filter(id=id)
        query.update(views = F("views") + 1)
        
        car_serializer = car.CarSerializer(
            query,
            many=True, 
            context=context
        ).data

        return Response(car_serializer)


class formServiceId(generics.GenericAPIView):

    queryset = ''
    
    def get(self, request, id, *args, **kwargs):

        context = {
            'request': request,
        }

        query = AdvertService.objects.filter(id=id)
        query.update(views = F("views") + 1)
        
        service_serializer = service.ServiceSerializer(
            query,
            many=True, 
            context=context
        ).data

        return Response(service_serializer)


class formHomeId(generics.GenericAPIView):

    queryset = ''
    
    def get(self, request, id, *args, **kwargs):

        context = {
            'request': request,
        }

        query = AdvertHome.objects.filter(id=id)
        query.update(views = F("views") + 1)
        
        home_serializer = home.HomeSerializer(
            query,
            many=True, 
            context=context
        ).data

        return Response(home_serializer)


class formFoodId(generics.GenericAPIView):

    queryset = ''
    
    def get(self, request, id, *args, **kwargs):

        context = {
            'request': request,
        }

        query = AdvertFood.objects.filter(id=id)
        query.update(views = F("views") + 1)
        
        home_serializer = food.FoodSerializer(
            query,
            many=True, 
            context=context
        ).data

        return Response(home_serializer)


class formJobsId(generics.GenericAPIView):

    queryset = ''
    
    def get(self, request, id, *args, **kwargs):

        context = {
            'request': request,
        }

        query = AdvertJobs.objects.filter(id=id)
        query.update(views = F("views") + 1)
        
        jobs_serializer = jobs.JobsSerializer(
            query,
            many=True, 
            context=context
        ).data

        return Response(jobs_serializer)


class formRemontId(generics.GenericAPIView):

    queryset = ''
    
    def get(self, request, id, *args, **kwargs):

        context = {
            'request': request,
        }

        query = AdvertRemont.objects.filter(id=id)
        query.update(views = F("views") + 1)
        
        remont_serializer = remont.RemontSerializer(
            query,
            many=True, 
            context=context
        ).data

        return Response(remont_serializer)
