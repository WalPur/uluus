# Generated by Django 4.1 on 2022-08-12 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advert', '0011_advertcar_drive_unit_advertcar_transmission_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advertrent',
            name='uluus',
            field=models.ManyToManyField(blank=True, to='advert.uluss', verbose_name='Улус объявления'),
        ),
    ]
