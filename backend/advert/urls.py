from .views import (
    formRent,
    formCar,
    formService,
    formHome,
    formFood,
    formJobs,
    formPremium,
    formRemont,
    formAll,
    formUluus,
    formRentId,
    formCarId,
    formServiceId,
    formHomeId,
    formFoodId,
    formJobsId,
    formRemontId
)

from django.urls import path
from rest_framework.routers import DefaultRouter


router = DefaultRouter()

router.register('uluus', formUluus, basename='uluus')
router.register('rent', formRent, basename='rent')
router.register('car', formCar, basename='car')
router.register('service', formService, basename='service')
router.register('home', formHome, basename='home')
router.register('food', formFood, basename='food')
router.register('jobs', formJobs, basename='jobs')
router.register('remont', formRemont, basename='remont')
router.register('advert', formAll, basename='advert')
router.register('premium', formPremium, basename='premium')

urlpatterns = [
    # path('premium/', formPremium.as_view(), name='card-form'),
    # path('adverts/', formAll.as_view(), name='card-form'),
    path('rent/<int:id>/', formRentId.as_view(), name='rent advert page'),
    path('car/<int:id>/', formCarId.as_view(), name='car advert page'),
    path('service/<int:id>/', formServiceId.as_view(), name='service advert page'),
    path('home/<int:id>/', formHomeId.as_view(), name='home advert page'),
    path('food/<int:id>/', formFoodId.as_view(), name='food advert page'),
    path('jobs/<int:id>/', formJobsId.as_view(), name='jobs advert page'),
    path('remont/<int:id>/', formRemontId.as_view(), name='remont advert page'),
] + router.urls
