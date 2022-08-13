# Generated by Django 4.1 on 2022-08-13 02:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advert', '0012_alter_advertrent_uluus'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advertcar',
            name='uluus',
            field=models.ManyToManyField(blank=True, to='advert.uluss', verbose_name='Улус объявления'),
        ),
        migrations.AlterField(
            model_name='advertfood',
            name='uluus',
            field=models.ManyToManyField(blank=True, to='advert.uluss', verbose_name='Улус объявления'),
        ),
        migrations.AlterField(
            model_name='adverthome',
            name='uluus',
            field=models.ManyToManyField(blank=True, to='advert.uluss', verbose_name='Улус объявления'),
        ),
        migrations.AlterField(
            model_name='advertjobs',
            name='uluus',
            field=models.ManyToManyField(blank=True, to='advert.uluss', verbose_name='Улус объявления'),
        ),
        migrations.AlterField(
            model_name='advertservice',
            name='uluus',
            field=models.ManyToManyField(blank=True, to='advert.uluss', verbose_name='Улус объявления'),
        ),
    ]