from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry

from .models import (
    Advert,
    AdvertRent,
    AdvertCar,
    AdvertFood,
    AdvertHome,
    AdvertJobs,
    AdvertService,
    AdvertRemont
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
        model = Advert
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "improvement",
            "transmission",
            "drive_unit",
            "subcategory",
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
        model = Advert
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "improvement",
            "transmission",
            "drive_unit",
            "subcategory",
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
        model = Advert
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "improvement",
            "transmission",
            "drive_unit",
            "subcategory",
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
        model = Advert
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "improvement",
            "transmission",
            "drive_unit",
            "subcategory",
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
        model = Advert
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "improvement",
            "transmission",
            "drive_unit",
            "subcategory",
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
        model = Advert
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "improvement",
            "transmission",
            "drive_unit",
            "subcategory",
            "action",
            "is_premium",
            "slug",
            "views",
            "date",
        )


@registry.register_document
class RemontDocument(Document):
    id = fields.IntegerField()
    uluus = fields.NestedField(properties={
        'name': fields.TextField(),
        'pk': fields.IntegerField(),
    })
    class Index:
        name = 'remont_adverts'
        settings = {
            'number_of_shards': 1,
            'number_of_replicas': 0,
        }

    class Django:
        model = Advert
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "improvement",
            "transmission",
            "drive_unit",
            "subcategory",
            "action",
            "is_premium",
            "slug",
            "views",
            "date",
        )


@registry.register_document
class AdvertDocument(Document):
    id = fields.IntegerField()
    uluus = fields.NestedField(properties={
        'name': fields.TextField(),
        'pk': fields.IntegerField(),
    })
    class Index:
        name = 'adverts'
        settings = {
            'number_of_shards': 1,
            'number_of_replicas': 0,
        }

    class Django:
        model = Advert
        fields = (
            "name",
            "description",
            "phone",
            "is_whatsapp",
            "user_name",
            "settlement",
            "price",
            "improvement",
            "transmission",
            "drive_unit",
            "subcategory",
            "action",
            "is_premium",
            "slug",
            "views",
            "date",
        )
