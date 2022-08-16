from django.db import models

from . import subcategories, actions, oddFields


class Uluss(models.Model):
    """Модель улуса"""

    name = models.CharField(
        max_length=255,
        verbose_name="Название улуса"
    )
    text = models.TextField(
        verbose_name="Описание улуса"
    )
    square = models.CharField(
        max_length=255,
        verbose_name="Площадь улуса"
    )
    population = models.CharField(
        max_length=255,
        verbose_name="Население улуса"
    )
    estab = models.CharField(
        max_length=255,
        verbose_name="Дата образования улуса"
    )
    capital = models.CharField(
        max_length=255,
        verbose_name="Центр улуса"
    )
    image = models.ImageField(
        upload_to='uluusImages/',
        verbose_name="Картинка улуса"
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Улус'
        verbose_name_plural = 'Улусы'


class AdvertRent(models.Model):
    """Модель объявлений недвижимости"""

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
    improvement = models.CharField(
        choices=oddFields.RentImprovement.choices,
        max_length=128,
        default=oddFields.RentImprovement.BLACK,
        verbose_name="Благоустройство"
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
    is_premium = models.BooleanField(
        verbose_name='Премиум',
        default=False
    )
    slug = models.SlugField(max_length=200, blank=True)
    views = models.IntegerField(default=0, blank=True)
    date = models.DateTimeField(
        auto_now=True,
        verbose_name="Время отправки объявления"
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Объявление недвижимости'
        verbose_name_plural = 'Объявления недвижимости'


class AdvertCar(models.Model):
    """Модель объявлений автомобилей"""

    name = models.CharField(max_length=255, verbose_name="Заголовок объявления")
    description = models.TextField(verbose_name="Описание")
    price = models.IntegerField(verbose_name="Цена")
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
    transmission = models.CharField(
        choices=oddFields.CarTransmisson.choices,
        max_length=128,
        default=oddFields.CarTransmisson.AUTOMATIC,
        verbose_name='Коробка авто'
    )
    drive_unit = models.CharField(
        choices=oddFields.CarDriveUnit.choices,
        max_length=128,
        default=oddFields.CarDriveUnit.BACK,
        verbose_name="Привод авто"
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
    is_premium = models.BooleanField(
        verbose_name='Премиум',
        default=False
    )
    date = models.DateTimeField(
        auto_now=True,
        verbose_name="Время отправки объявления"
    )
    views = models.IntegerField(default=0, blank=True)
    slug = models.SlugField(max_length=200, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Объявление автомобилей'
        verbose_name_plural = 'Объявления автомобилей'


class AdvertService(models.Model):
    """Модель объявлений услуг"""

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
    is_premium = models.BooleanField(
        verbose_name='Премиум',
        default=False
    )
    date = models.DateTimeField(
        auto_now=True,
        verbose_name="Время отправки объявления"
    )
    views = models.IntegerField(default=0, blank=True)
    slug = models.SlugField(max_length=200, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Объявление услуг'
        verbose_name_plural = 'Объявления услуг'


class AdvertHome(models.Model):
    """Модель объявлений для дома"""

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
    is_premium = models.BooleanField(
        verbose_name='Премиум',
        default=False
    )
    date = models.DateTimeField(
        auto_now=True,
        verbose_name="Время отправки объявления"
    )
    views = models.IntegerField(default=0, blank=True)
    slug = models.SlugField(max_length=200, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Объявление для дома'
        verbose_name_plural = 'Объявления для дома'


class AdvertFood(models.Model):
    """Модель объявлений еды"""

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
    is_premium = models.BooleanField(
        verbose_name='Премиум',
        default=False
    )
    date = models.DateTimeField(
        auto_now=True,
        verbose_name="Время отправки объявления"
    )
    views = models.IntegerField(default=0, blank=True)
    slug = models.SlugField(max_length=200, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Объявление еды'
        verbose_name_plural = 'Объявления еды'


class AdvertJobs(models.Model):
    """Модель объявлений вакансий"""

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
    category = models.CharField(
        choices=subcategories.JobsCategory.choices,
        max_length=128,
        default=subcategories.JobsCategory.NEED,
        verbose_name="Подкатегория вакансии"
    )
    action = models.CharField(
        choices=actions.JobsActions.choices,
        max_length=128,
        default=actions.JobsActions.PERMANENTLY,
        verbose_name="Действие вакансии"
    )
    is_premium = models.BooleanField(
        verbose_name='Премиум',
        default=False
    )
    date = models.DateTimeField(
        auto_now=True,
        verbose_name="Время отправки объявления"
    )
    views = models.IntegerField(default=0, blank=True)
    slug = models.SlugField(max_length=200, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Объявление вакансий'
        verbose_name_plural = 'Объявления вакансий'


class AdvertRemont(models.Model):
    """Модель объявлений ремонта"""

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
    category = models.CharField(
        choices=subcategories.RemontCategory.choices,
        max_length=128,
        default=subcategories.RemontCategory.DOORS,
        verbose_name="Подкатегория ремонта и строительства"
    )
    action = models.CharField(
        choices=actions.RemontActions.choices,
        max_length=128,
        default=actions.RemontActions.SELL,
        verbose_name="Подкатегория ремонта и строительства"
    )
    is_premium = models.BooleanField(
        verbose_name='Премиум',
        default=False
    )
    date = models.DateTimeField(
        auto_now=True,
        verbose_name="Время отправки объявления"
    )
    views = models.IntegerField(default=0, blank=True)
    slug = models.SlugField(max_length=200, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Объявление ремонта и строительства'
        verbose_name_plural = 'Объявления ремонта и строительства'


class RentImages(models.Model):
    """Модель картинок недвижимости"""

    post = models.ForeignKey(
        AdvertRent,
        verbose_name="Объявление",
        on_delete=models.CASCADE,
    )
    image = models.ImageField(
        upload_to='RentImages/',
        verbose_name="Изображение",
    )

    def __str__(self):
        return f'{self.post} изображение'

    class Meta:
        verbose_name = 'Изображение недвижимости'
        verbose_name_plural = 'Изображения недвижимости'


class CarImages(models.Model):
    """Модель картинок автомобилей"""

    post = models.ForeignKey(
        AdvertCar,
        verbose_name="Объявление",
        on_delete=models.CASCADE,
    )
    image = models.ImageField(
        upload_to='CarImages/',
        verbose_name="Изображение",
    )

    def __str__(self):
        return f'{self.post} изображение'

    class Meta:
        verbose_name = 'Изображение автомобилей'
        verbose_name_plural = 'Изображения автомобилей'


class ServiceImages(models.Model):
    """Модель картинок услуг"""

    post = models.ForeignKey(
        AdvertService,
        verbose_name="Объявление",
        on_delete=models.CASCADE,
    )
    image = models.ImageField(
        upload_to='ServiceImages/',
        verbose_name="Изображение",
    )

    def __str__(self):
        return f'{self.post} изображение'

    class Meta:
        verbose_name = 'Изображение услуг'
        verbose_name_plural = 'Изображения услуг'


class HomeImages(models.Model):
    """Модель картинок для дома"""

    post = models.ForeignKey(
        AdvertHome,
        verbose_name="Объявление",
        on_delete=models.CASCADE,
    )
    image = models.ImageField(
        upload_to='HomeImages/',
        verbose_name="Изображение",
    )

    def __str__(self):
        return f'{self.post} изображение'

    class Meta:
        verbose_name = 'Изображение для дома'
        verbose_name_plural = 'Изображения для дома'


class FoodImages(models.Model):
    """Модель картинок еды"""

    post = models.ForeignKey(
        AdvertFood,
        verbose_name="Объявление",
        on_delete=models.CASCADE,
    )
    image = models.ImageField(
        upload_to='FoodImages/',
        verbose_name="Изображение",
    )

    def __str__(self):
        return f'{self.post} изображение'

    class Meta:
        verbose_name = 'Изображение еды'
        verbose_name_plural = 'Изображения еды'


class JobsImages(models.Model):
    """Модель картинок вакансий"""

    post = models.ForeignKey(
        AdvertJobs,
        verbose_name="Объявление",
        on_delete=models.CASCADE,
    )
    image = models.ImageField(
        upload_to='JobsImages/',
        verbose_name="Изображение",
    )

    def __str__(self):
        return f'{self.post} изображение'

    class Meta:
        verbose_name = 'Изображение вакансий'
        verbose_name_plural = 'Изображения вакансий'


class RemontImages(models.Model):
    """Модель картинок ремонта"""

    post = models.ForeignKey(
        AdvertRemont,
        verbose_name="Объявление",
        on_delete=models.CASCADE,
    )
    image = models.ImageField(
        upload_to='JobsImages/',
        verbose_name="Изображение",
    )

    def __str__(self):
        return f'{self.post} изображение'

    class Meta:
        verbose_name = 'Изображение ремонта и строительства'
        verbose_name_plural = 'Изображения ремонта и строительства'
