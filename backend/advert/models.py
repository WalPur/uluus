from django.db import models

from . import subcategories
from . import actions


class Uluss(models.Model):
    """Модель улуса"""

    name = models.CharField(max_length=255, verbose_name="Название улуса")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Улус'
        verbose_name_plural = 'Улусы'


class AdvertRent(models.Model):
    """Модель объявлений"""

    name = models.CharField(max_length=255, verbose_name="Заголовок объявления")
    description = models.TextField(verbose_name="Описание")
    phone = models.CharField(max_length=255, verbose_name='Номер телефона')
    whatsapp = models.BooleanField(verbose_name='Есть Whatsapp')
    user_name = models.CharField(verbose_name='Имя', max_length=255)
    settlement = models.CharField(
        verbose_name='Населенный пункт',
        max_length=255
    )
    category = models.CharField(
        choices=subcategories.RentCategory.choices,
        max_length=128,
        default=subcategories.RentCategory.HOUSE,
        verbose_name="Подкатегория недвижимости"
    )
    action = models.CharField(
        choices=actions.RentCarActions.choices,
        max_length=128,
        default=actions.RentCarActions.SELL,
        verbose_name="Действие недвижимости"
    )


class AdvertCar(models.Model):
    """Модель объявлений"""

    name = models.CharField(max_length=255, verbose_name="Заголовок объявления")
    description = models.TextField(verbose_name="Описание")
    phone = models.CharField(max_length=255, verbose_name='Номер телефона')
    whatsapp = models.BooleanField(verbose_name='Есть Whatsapp')
    user_name = models.CharField(verbose_name='Имя', max_length=255)
    settlement = models.CharField(
        verbose_name='Населенный пункт',
        max_length=255
    )
    category = models.CharField(
        choices=subcategories.AutoCategory.choices,
        max_length=128,
        default=subcategories.AutoCategory.CAR,
        verbose_name="Подкатегория авто"
    )
    action = models.CharField(
        choices=actions.RentCarActions.choices,
        max_length=128,
        default=actions.RentCarActions.SELL,
        verbose_name="Действие авто"
    )


class AdvertService(models.Model):
    """Модель объявлений"""

    name = models.CharField(max_length=255, verbose_name="Заголовок объявления")
    description = models.TextField(verbose_name="Описание")
    phone = models.CharField(max_length=255, verbose_name='Номер телефона')
    whatsapp = models.BooleanField(verbose_name='Есть Whatsapp')
    user_name = models.CharField(verbose_name='Имя', max_length=255)
    settlement = models.CharField(
        verbose_name='Населенный пункт',
        max_length=255
    )
    category = models.CharField(
        choices=subcategories.ServicesCategory.choices,
        max_length=128,
        default=subcategories.ServicesCategory.BUILDING_REPAIR,
        verbose_name="Подкатегория услуги"
    )
    action = models.CharField(
        choices=actions.ServicesActions.choices,
        max_length=128,
        default=actions.ServicesActions.PROVIDE,
        verbose_name="Действие услуги"
    )


class AdvertHome(models.Model):
    """Модель объявлений"""

    name = models.CharField(max_length=255, verbose_name="Заголовок объявления")
    description = models.TextField(verbose_name="Описание")
    phone = models.CharField(max_length=255, verbose_name='Номер телефона')
    whatsapp = models.BooleanField(verbose_name='Есть Whatsapp')
    user_name = models.CharField(verbose_name='Имя', max_length=255)
    settlement = models.CharField(
        verbose_name='Населенный пункт',
        max_length=255
    )
    category = models.CharField(
        choices=subcategories.HomeCategory.choices,
        max_length=128,
        default=subcategories.HomeCategory.WATER,
        verbose_name="Подкатегория для дома"
    )
    action = models.CharField(
        choices=actions.HomeFoodActions.choices,
        max_length=128,
        default=actions.HomeFoodActions.SELL,
        verbose_name="Действие для дома"
    )


class AdvertFood(models.Model):
    """Модель объявлений"""

    name = models.CharField(max_length=255, verbose_name="Заголовок объявления")
    description = models.TextField(verbose_name="Описание")
    phone = models.CharField(max_length=255, verbose_name='Номер телефона')
    whatsapp = models.BooleanField(verbose_name='Есть Whatsapp')
    user_name = models.CharField(verbose_name='Имя', max_length=255)
    settlement = models.CharField(
        verbose_name='Населенный пункт',
        max_length=255
    )
    category = models.CharField(
        choices=subcategories.FoodCategory.choices,
        max_length=128,
        default=subcategories.FoodCategory.OPTOM,
        verbose_name="Подкатегория еды"
    )
    action = models.CharField(
        choices=actions.HomeFoodActions.choices,
        max_length=128,
        default=actions.HomeFoodActions.SELL,
        verbose_name="Действие еды"
    )


class AdvertJobs(models.Model):
    """Модель объявлений"""

    name = models.CharField(max_length=255, verbose_name="Заголовок объявления")
    description = models.TextField(verbose_name="Описание")
    phone = models.CharField(max_length=255, verbose_name='Номер телефона')
    whatsapp = models.BooleanField(verbose_name='Есть Whatsapp')
    user_name = models.CharField(verbose_name='Имя', max_length=255)
    settlement = models.CharField(
        verbose_name='Населенный пункт',
        max_length=255
    )
    category = models.CharField(
        choices=subcategories.JobsCategory.choices,
        max_length=128,
        default=subcategories.JobsCategory.NEED,
        verbose_name="Подкатегория еды"
    )
    action = models.CharField(
        choices=actions.JobsActions.choices,
        max_length=128,
        default=actions.JobsActions.PERMANENTLY,
        verbose_name="Действие еды"
    )
