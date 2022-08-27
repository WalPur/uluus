from django.db.models import F, Q
from rest_framework import viewsets, generics
from rest_framework.response import Response
from drf_multiple_model.views import FlatMultipleModelAPIView
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from rest_framework.pagination import PageNumberPagination


from .models import (
    Advert,
    Uluss
)

from .serializers import (
    advert,
    car,
    food,
    home,
    jobs,
    premium,
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
            return Advert.objects.filter(Q(uluus__id__in=uluuses), slug="rent").distinct().order_by('-date')
        else:
            return Advert.objects.filter(slug="rent").order_by('-date')


class formCar(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = car.CarSerializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return Advert.objects.filter(Q(uluus__id__in=uluuses), slug="car").distinct().order_by('-date')
        else:
            return Advert.objects.filter(slug="car").order_by('-date')


class formService(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = service.ServiceSerializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return Advert.objects.filter(Q(uluus__id__in=uluuses), slug="service").distinct().order_by('-date')
        else:
            return Advert.objects.filter(slug="service").order_by('-date')


class formHome(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = home.HomeSerializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return Advert.objects.filter(Q(uluus__id__in=uluuses), slug="home").distinct().order_by('-date')
        else:
            return Advert.objects.filter(slug="home").order_by('-date')


class formFood(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = food.FoodSerializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return Advert.objects.filter(Q(uluus__id__in=uluuses), slug="food").distinct().order_by('-date')
        else:
            return Advert.objects.filter(slug="food").order_by('-date')


class formJobs(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = jobs.JobsSerializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return Advert.objects.filter(Q(uluus__id__in=uluuses), slug="jobs").distinct().order_by('-date')
        else:
            return Advert.objects.filter(slug="jobs").order_by('-date')

class formRemont(viewsets.ModelViewSet):
    http_method_names = ['post', 'get']
    serializer_class = remont.RemontSerializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return Advert.objects.filter(Q(uluus__id__in=uluuses), slug="remont").distinct().order_by('-date')
        else:
            return Advert.objects.filter(slug="remont").order_by('-date')


class formAll(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = advert.Serializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return Advert.objects.filter(Q(uluus__id__in=uluuses), is_premium=False).distinct().order_by('-date')
        else:
            return Advert.objects.filter(is_premium=False).order_by('-date')


class formPremium(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = premium.Serializer

    def get_queryset(self):
        uluuses = self.request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, self.request.GET.get("uluus", "").split(',')))
            return Advert.objects.filter(Q(uluus__id__in=uluuses), is_premium=True).distinct().order_by('-date')
        else:
            return Advert.objects.filter(is_premium=True).order_by('-date')


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
        return queryset.filter((Q(name__icontains=query) | Q(description__icontains=query)) & Q(uluus__id__in=uluuses)).distinct()
    else:
        return queryset.filter(Q(name__icontains=query) | Q(description__icontains=query))


def name_content_with_no_letter(queryset, request, *args, **kwargs):
    uluuses = request.GET.get("uluus", "")
    if uluuses != "":
        uluuses = set(map(int, request.GET.get("uluus", "").split(',')))
        return queryset.filter(Q(uluus__id__in=uluuses)).distinct()
    else:
        return queryset.all()


class formRentId(generics.GenericAPIView):

    queryset = ''
    
    def get(self, request, id, *args, **kwargs):

        context = {
            'request': request,
        }

        query = Advert.objects.filter(id=id, slug='rent')
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

        query = Advert.objects.filter(id=id, slug='car')
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

        query = Advert.objects.filter(id=id, slug='service')
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

        query = Advert.objects.filter(id=id, slug='home')
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

        query = Advert.objects.filter(id=id, slug='food')
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

        query = Advert.objects.filter(id=id, slug='jobs')
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

        query = Advert.objects.filter(id=id, slug='remont')
        query.update(views = F("views") + 1)
        
        remont_serializer = remont.RemontSerializer(
            query,
            many=True, 
            context=context
        ).data

        return Response(remont_serializer)
