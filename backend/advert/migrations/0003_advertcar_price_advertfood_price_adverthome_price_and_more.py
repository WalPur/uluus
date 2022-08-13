# Generated by Django 4.1 on 2022-08-09 00:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advert', '0002_rename_whatsapp_advertcar_is_whatsapp_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='advertcar',
            name='price',
            field=models.PositiveIntegerField(default=0, verbose_name='Цена'),
        ),
        migrations.AddField(
            model_name='advertfood',
            name='price',
            field=models.PositiveIntegerField(default=0, verbose_name='Цена'),
        ),
        migrations.AddField(
            model_name='adverthome',
            name='price',
            field=models.PositiveIntegerField(default=0, verbose_name='Цена'),
        ),
        migrations.AddField(
            model_name='advertjobs',
            name='price',
            field=models.PositiveIntegerField(default=0, verbose_name='Цена'),
        ),
        migrations.AddField(
            model_name='advertrent',
            name='price',
            field=models.PositiveIntegerField(default=0, verbose_name='Цена'),
        ),
        migrations.AddField(
            model_name='advertservice',
            name='price',
            field=models.PositiveIntegerField(default=0, verbose_name='Цена'),
        ),
        migrations.AddField(
            model_name='uluss',
            name='capital',
            field=models.CharField(default='', max_length=255, verbose_name='Центр улуса'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='uluss',
            name='estab',
            field=models.CharField(default='', max_length=255, verbose_name='Дата образования улуса'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='uluss',
            name='image',
            field=models.ImageField(default='', upload_to='uluusImages/', verbose_name='Картинка улуса'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='uluss',
            name='population',
            field=models.CharField(default='', max_length=255, verbose_name='Население улуса'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='uluss',
            name='square',
            field=models.CharField(default='', max_length=255, verbose_name='Площадь улуса'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='uluss',
            name='text',
            field=models.TextField(default='', verbose_name='Описание улуса'),
            preserve_default=False,
        ),
    ]