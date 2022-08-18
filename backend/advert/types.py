from django.db import models


class Types(models.TextChoices):
    """Типы объявлений"""

    RENT = 'RENT'
    CAR = 'CAR'
    SERVICE = 'SERVICE'
    HOME = 'HOME'
    FOOD = 'FOOD'
    JOBS = 'JOBS'
    REMONT = 'REMONT'
