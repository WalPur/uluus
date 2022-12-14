# Generated by Django 4.1 on 2022-08-18 05:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advert', '0015_alter_advertremont_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='Advert',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Заголовок объявления')),
                ('description', models.TextField(verbose_name='Описание')),
                ('phone', models.CharField(max_length=255, verbose_name='Номер телефона')),
                ('is_whatsapp', models.BooleanField(verbose_name='Есть Whatsapp')),
                ('user_name', models.CharField(max_length=255, verbose_name='Имя')),
                ('settlement', models.CharField(max_length=255, verbose_name='Населенный пункт')),
                ('price', models.PositiveIntegerField(default=0, verbose_name='Цена')),
                ('is_premium', models.BooleanField(default=False, verbose_name='Премиум')),
                ('category', models.CharField(choices=[('RENT', 'Rent'), ('CAR', 'Car'), ('SERVICE', 'Service'), ('HOME', 'Home'), ('FOOD', 'Food'), ('JOBS', 'Jobs'), ('REMONT', 'Remont')], max_length=255, verbose_name='Категория объявления')),
                ('subcategory', models.CharField(choices=[('HOUSE', 'House'), ('APARTMENT', 'Apartment'), ('COTTAGE', 'Cottage'), ('AREA', 'Area'), ('FARMLAND', 'Farmland'), ('OTHER', 'Other')], max_length=128, verbose_name='Подкатегория объявления')),
                ('action', models.CharField(choices=[('SELL', 'Sell'), ('BUY', 'Buy'), ('TRADE', 'Trade'), ('RENT_OUT', 'Rent Out'), ('TO_RENT', 'To Rent'), ('PROVIDE', 'Provide'), ('USE', 'Use'), ('PERMANENTLY', 'Permanently'), ('TEMPORALLY', 'Temporally')], max_length=128, verbose_name='Действия объявления')),
                ('improvement', models.CharField(choices=[('WAS_USED', 'Was Used'), ('BLACK', 'Black'), ('GAS', 'Gas')], default=None, max_length=128, verbose_name='Благоустройство')),
                ('transmission', models.CharField(choices=[('AUTOMATIC', 'Automatic'), ('VARIABLE', 'Variable'), ('MANUAL', 'Manual')], default=None, max_length=128, verbose_name='Коробка авто')),
                ('drive_unit', models.CharField(choices=[('FORWARD', 'Forward'), ('BACK', 'Back'), ('FULL', 'Full')], default=None, max_length=128, verbose_name='Привод авто')),
                ('slug', models.SlugField(blank=True, max_length=200)),
                ('views', models.IntegerField(blank=0, default=0)),
                ('date', models.DateTimeField(auto_now=True, verbose_name='Время отправки объявления')),
                ('uluus', models.ManyToManyField(blank=True, to='advert.uluss', verbose_name='Улус объявления')),
            ],
            options={
                'verbose_name': 'Объявление',
                'verbose_name_plural': 'Объявления',
            },
        ),
    ]
