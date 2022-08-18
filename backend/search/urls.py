from django.urls import path

from search.views import (
    SearchCar,
    SearchFood,
    SearchHome,
    SearchJobs,
    SearchService,
    SearchRent,
    SearchRemont,
    SearchAdvert,
)

urlpatterns = [
    path('car/<str:query>/', SearchCar.as_view()),
    path('food/<str:query>/', SearchFood.as_view()),
    path('home/<str:query>/', SearchHome.as_view()),
    path('jobs/<str:query>/', SearchJobs.as_view()),
    path('service/<str:query>/', SearchService.as_view()),
    path('rent/<str:query>/', SearchRent.as_view()),
    path('remont/<str:query>/', SearchRemont.as_view()),
    path('advert/<str:query>/', SearchAdvert.as_view()),
]
