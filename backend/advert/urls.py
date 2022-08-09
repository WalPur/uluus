from .views import (
    formRent,
    formCar,
    formService,
    formHome,
    formFood,
    formJobs,
    formAll,
)

from django.urls import path
from rest_framework.routers import DefaultRouter


router = DefaultRouter()

router.register('rent', formRent, basename='rent')
router.register('car', formCar, basename='car')
router.register('service', formService, basename='service')
router.register('home', formHome, basename='home')
router.register('food', formFood, basename='food')
router.register('jobs', formJobs, basename='jobs')

urlpatterns = [
    path('adverts/', formAll.as_view(), name='card-form'),
] + router.urls
