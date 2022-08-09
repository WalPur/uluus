from django.contrib import admin

from .models import Uluss


@admin.register(Uluss)
class CourierAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ['name']
    search_fields = ['name']
