from .views import (
    formRent
)

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('rent', formRent, basename='rent')
urlpatterns = router.urls