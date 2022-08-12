from django.db import models


class RentImprovement(models.TextChoices):
    """Дополнительное поле благоустройства квартиры"""
    WAS_USED = "WAS_USED"
    BLACK = 'BLACK'
    GAS = 'GAS'


class CarTransmisson(models.TextChoices):
    """Дополнительное поле коробки машины"""
    AUTOMATIC = 'AUTOMATIC'
    VARIABLE = 'VARIABLE'
    MANUAL = 'MANUAL'


class CarDriveUnit(models.TextChoices):
    """Дополнительное поле привода машины"""
    FORWARD = 'FORWARD'
    BACK = 'BACK'
    FULL = 'FULL'