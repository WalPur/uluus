from django.db import models

from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFit

from . import subcategories, actions, oddFields


class Uluss(models.Model):
    """Модель улуса"""

    name = models.CharField(
        max_length=255,
        verbose_name="Название улуса"
    )
    text = models.TextField(
        verbose_name="Описание улуса",
        blank=True
    )
    square = models.CharField(
        max_length=255,
        verbose_name="Площадь улуса",
        blank=True
    )
    population = models.CharField(
        max_length=255,
        verbose_name="Население улуса",
        blank=True
    )
    estab = models.CharField(
        max_length=255,
        verbose_name="Дата образования улуса",
        blank=True
    )
    capital = models.CharField(
        max_length=255,
        verbose_name="Центр улуса",
        blank=True
    )
    image = models.ImageField(
        upload_to='uluusImages/',
        verbose_name="Картинка улуса",
        blank=True
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Улус'
        verbose_name_plural = 'Улусы'


class Advert(models.Model):
    """Общая модель объявлений"""

    # Общие поля
    name = models.CharField(max_length=255, verbose_name="Заголовок объявления")
    description = models.TextField(verbose_name="Описание")
    phone = models.CharField(max_length=255, verbose_name='Номер телефона')
    is_whatsapp = models.BooleanField(verbose_name='Есть Whatsapp')
    user_name = models.CharField(verbose_name='Имя', max_length=255)
    settlement = models.CharField(
        verbose_name='Населенный пункт',
        max_length=255
    )
    uluus = models.ManyToManyField(
        Uluss,
        verbose_name="Улус объявления",
        blank=True,
    )
    price = models.PositiveIntegerField(
        verbose_name="Цена",
        default=0,
    )
    is_premium = models.BooleanField(
        verbose_name='Премиум',
        default=False
    )
    premium_link = models.CharField(
        verbose_name="Ссылка на премиум",
        default="",
        max_length=255,
        blank=True,
        null=True
    )

    # Разделяющие поля
    subcategory = models.CharField(
        choices=subcategories.Subcategories.choices,
        max_length=128,
        verbose_name="Подкатегория объявления"
    )
    action = models.CharField(
        choices=actions.Actions.choices,
        max_length=128,
        verbose_name="Действия объявления"
    )

    # Опциональные поля
    improvement = models.CharField(
        choices=oddFields.RentImprovement.choices,
        max_length=128,
        default=None,
        verbose_name="Благоустройство",
        null=True
    )
    transmission = models.CharField(
        choices=oddFields.CarTransmisson.choices,
        max_length=128,
        default=None,
        verbose_name='Коробка авто',
        null=True
    )
    drive_unit = models.CharField(
        choices=oddFields.CarDriveUnit.choices,
        max_length=128,
        default=None,
        verbose_name="Привод авто",
        null=True
    )

    # Мета поля
    slug = models.SlugField(max_length=200, blank=True)
    views = models.IntegerField(default=0, blank=0)
    date = models.DateTimeField(
        auto_now=True,
        verbose_name="Время отправки объявления"
    )

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = 'Объявление'
        verbose_name_plural = 'Объявления'


class AdvertImages(models.Model):
    """Модель картинок объявления"""

    post = models.ForeignKey(
        Advert,
        verbose_name="Объявление",
        on_delete=models.CASCADE,
    )
    image = models.ImageField(
        upload_to='Images/',
        verbose_name="Изображение",
    )
    thumbnail = ImageSpecField(
        source='image',
        processors=[ResizeToFit(120, 120)],
        format='JPEG',
        options={'quality': 60}
    )
    window = ImageSpecField(
        source='image',
        processors=[ResizeToFit(195, 130)],
        format='JPEG',
        options={'quality': 60}
    )

    def __str__(self):
        return f'{self.post} изображение'

    class Meta:
        verbose_name = 'Изображение объявления'
        verbose_name_plural = 'Изображения объявления'
