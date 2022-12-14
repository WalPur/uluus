# Generated by Django 4.1 on 2022-08-10 07:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advert', '0007_advertcar_is_premium_advertfood_is_premium_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='advertcar',
            name='slug',
            field=models.SlugField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='advertfood',
            name='slug',
            field=models.SlugField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='adverthome',
            name='slug',
            field=models.SlugField(default=11, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='advertjobs',
            name='slug',
            field=models.SlugField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='advertrent',
            name='slug',
            field=models.SlugField(default=11, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='advertservice',
            name='slug',
            field=models.SlugField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]
