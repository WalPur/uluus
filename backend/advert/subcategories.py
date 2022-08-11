from django.db import models


class RentCategory(models.TextChoices):
    """Подкатегории недвижимости"""

    HOUSE = 'HOUSE'
    APARTMENT = 'APARTMENT'
    COTTAGE = 'COTTAGE'
    AREA = 'AREA'
    FARMLAND = 'FARMLAND'
    OTHER = 'OTHER'


class AutoCategory(models.TextChoices):
    """Подкатегории автомобилей"""

    CAR = 'CAR'
    SPECIAL_CAR = 'SPECIAL_CAR'
    PARTS = 'PARTS'
    MOTO_TECHNICS = 'MOTO_TECHNICS'
    BOATS = 'BOATS'
    OTHER = 'OTHER'


class ServicesCategory(models.TextChoices):
    """Подкатегории услуг"""

    BUILDING_REPAIR = 'BUILDING_REPAIR'
    TRANSPORT = 'TRANSPORT'
    SPEC = 'SPEC'
    PLUMBING = 'PLUMBING'
    ELECTRICY = 'ELECTRICY'
    AUTOSERVICE = 'AUTOSERVICE'
    HANDYMAN = 'HANDYMAN'
    OTHER = 'OTHER'


class HomeCategory(models.TextChoices):
    """Подкатегории для дома"""

    WATER = 'WATER'
    ICE = 'ICE'
    FIREWOOD = 'FIREWOOD'
    COAL = 'COAL'
    EARTH = 'EARTH'
    CHERNOZEM = 'CHERNOZEM'
    MANURE = 'MANURE'
    SEEDLING = 'SEEDLING'
    OTHER = 'OTHER'


class FoodCategory(models.TextChoices):
    """Подкатегория еды"""

    OPTOM = 'OPTOM'
    ROZNITSA = 'ROZNITSA'
    OTHER = 'OTHER'


class JobsCategory(models.TextChoices):
    """Подкатегория вакансий"""

    NEED = 'NEED'
    SEARCH = 'SEARCH'
    OTHER = 'OTHER'
