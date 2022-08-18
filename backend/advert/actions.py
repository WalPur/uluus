from django.db import models


class RentCarActions(models.TextChoices):
    """Действия недвижимости"""

    SELL = 'SELL'
    BUY = 'BUY'
    TRADE = 'TRADE'
    RENT_OUT = 'RENT_OUT'
    TO_RENT = 'TO_RENT'


class ServicesActions(models.TextChoices):
    """Действия услуг"""

    PROVIDE = 'PROVIDE'
    USE = 'USE'


class HomeFoodActions(models.TextChoices):
    """Действия для дома"""

    SELL = 'SELL'
    BUY = 'BUY'


class JobsActions(models.TextChoices):
    """Действия вакансий"""

    PERMANENTLY = 'PERMANENTLY'
    TEMPORALLY = 'TEMPORALLY'

class RemontActions(models.TextChoices):
    """Действия ремонта"""

    SELL = 'SELL'
    BUY = 'BUY'
    TRADE = 'TRADE'


class Actions(models.TextChoices):
    """Действия объявления"""

    # Действия недвижимости
    SELL = 'SELL'
    BUY = 'BUY'
    TRADE = 'TRADE'
    RENT_OUT = 'RENT_OUT'
    TO_RENT = 'TO_RENT'

    # Действия услуг
    PROVIDE = 'PROVIDE'
    USE = 'USE'

    # Действия для вакансий
    PERMANENTLY = 'PERMANENTLY'
    TEMPORALLY = 'TEMPORALLY'
