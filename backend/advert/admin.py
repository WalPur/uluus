from django.contrib import admin

from .models import (
    AdvertRent,
    AdvertCar,
    AdvertService,
    AdvertHome,
    AdvertFood,
    AdvertJobs,
    AdvertRemont,
    RentImages,
    CarImages,
    ServiceImages,
    HomeImages,
    FoodImages,
    JobsImages,
    RemontImages,
    Uluss
)


@admin.register(Uluss)
class UlussAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ['name']
    search_fields = ['name']


class RentImagesInline(admin.TabularInline):
    model = RentImages
    extra = 0


@admin.register(AdvertRent)
class RentAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ['name']
    search_fields = ['name']
    inlines = [RentImagesInline, ]


class CarImagesInline(admin.TabularInline):
    model = CarImages
    extra = 0


@admin.register(AdvertCar)
class CarAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ['name']
    search_fields = ['name']
    inlines = [CarImagesInline, ]


class ServiceImagesInline(admin.TabularInline):
    model = ServiceImages
    extra = 0


@admin.register(AdvertService)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ['name']
    search_fields = ['name']
    inlines = [ServiceImagesInline, ]


class HomeImagesInline(admin.TabularInline):
    model = HomeImages
    extra = 0


@admin.register(AdvertHome)
class HomeAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ['name']
    search_fields = ['name']
    inlines = [HomeImagesInline, ]


class FoodImagesInline(admin.TabularInline):
    model = FoodImages
    extra = 0


@admin.register(AdvertFood)
class FoodAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ['name']
    search_fields = ['name']
    inlines = [FoodImagesInline, ]


class JobsImagesInline(admin.TabularInline):
    model = JobsImages
    extra = 0


@admin.register(AdvertJobs)
class JobsAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ['name']
    search_fields = ['name']
    inlines = [JobsImagesInline, ]


class RemontImagesInline(admin.TabularInline):
    model = RemontImages
    extra = 0


@admin.register(AdvertRemont)
class RemontAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ['name']
    search_fields = ['name']
    inlines = [RemontImagesInline, ]