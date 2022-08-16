from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry

from .models import (
    AdvertRent,
    AdvertCar,
    AdvertFood,
    AdvertHome,
    AdvertJobs,
    AdvertService,
)


@registry.register_document
class RentDocument(Document):
    id = fields.IntegerField()
    uluus = fields.NestedField(properties={
        'name': fields.TextField(),
        'pk': fields.IntegerField(),
    })
    class Index:
        name = 'rent_adverts'
        settings = {
            'number_of_shards': 1,
            'number_of_replicas': 0,
        }

    class Django:
        model = AdvertRent
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "improvement",
            "category",
            "action",
            "is_premium",
            "slug",
            "views",
            "date",
        )

@registry.register_document
class CarDocument(Document):
    id = fields.IntegerField()
    uluus = fields.NestedField(properties={
        'name': fields.TextField(),
        'pk': fields.IntegerField(),
    })
    class Index:
        name = 'car_adverts'
        settings = {
            'number_of_shards': 1,
            'number_of_replicas': 0,
        }

    class Django:
        model = AdvertCar
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "transmission",
            "drive_unit",
            "category",
            "action",
            "is_premium",
            "slug",
            "views",
            "date",
        )


@registry.register_document
class ServiceDocument(Document):
    id = fields.IntegerField()
    uluus = fields.NestedField(properties={
        'name': fields.TextField(),
        'pk': fields.IntegerField(),
    })
    class Index:
        name = 'service_adverts'
        settings = {
            'number_of_shards': 1,
            'number_of_replicas': 0,
        }

    class Django:
        model = AdvertService
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "category",
            "action",
            "is_premium",
            "slug",
            "views",
            "date",
        )


@registry.register_document
class HomeDocument(Document):
    id = fields.IntegerField()
    uluus = fields.NestedField(properties={
        'name': fields.TextField(),
        'pk': fields.IntegerField(),
    })
    class Index:
        name = 'home_adverts'
        settings = {
            'number_of_shards': 1,
            'number_of_replicas': 0,
        }

    class Django:
        model = AdvertHome
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "category",
            "action",
            "is_premium",
            "slug",
            "views",
            "date",
        )


@registry.register_document
class FoodDocument(Document):
    id = fields.IntegerField()
    uluus = fields.NestedField(properties={
        'name': fields.TextField(),
        'pk': fields.IntegerField(),
    })
    class Index:
        name = 'food_adverts'
        settings = {
            'number_of_shards': 1,
            'number_of_replicas': 0,
        }

    class Django:
        model = AdvertFood
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "category",
            "action",
            "is_premium",
            "slug",
            "views",
            "date",
        )


@registry.register_document
class JobsDocument(Document):
    id = fields.IntegerField()
    uluus = fields.NestedField(properties={
        'name': fields.TextField(),
        'pk': fields.IntegerField(),
    })
    class Index:
        name = 'jobs_adverts'
        settings = {
            'number_of_shards': 1,
            'number_of_replicas': 0,
        }

    class Django:
        model = AdvertJobs
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "category",
            "action",
            "is_premium",
            "slug",
            "views",
            "date",
        )
