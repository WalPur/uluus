# Generated by Django 4.1 on 2022-08-25 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advert', '0023_remove_advertfood_uluus_remove_adverthome_uluus_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advert',
            name='premium_link',
            field=models.CharField(blank=True, default='', max_length=255, null=True, verbose_name='Ссылка на премиум'),
        ),
    ]
