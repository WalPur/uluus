from django.contrib import admin

from .models import (
    Advert,
    AdvertImages,
    Uluss
)


@admin.register(Uluss)
class UlussAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ['name']
    search_fields = ['name']


class ImagesInline(admin.TabularInline):
    model = AdvertImages
    extra = 0


@admin.register(Advert)
class AdvertAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    list_filter = ['name']
    search_fields = ['name']
    inlines = [ImagesInline, ]
