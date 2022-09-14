# Generated by Django 4.1 on 2022-09-14 03:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advert', '0024_alter_advert_premium_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uluss',
            name='capital',
            field=models.CharField(blank=True, max_length=255, verbose_name='Центр улуса'),
        ),
        migrations.AlterField(
            model_name='uluss',
            name='estab',
            field=models.CharField(blank=True, max_length=255, verbose_name='Дата образования улуса'),
        ),
        migrations.AlterField(
            model_name='uluss',
            name='image',
            field=models.ImageField(blank=True, upload_to='uluusImages/', verbose_name='Картинка улуса'),
        ),
        migrations.AlterField(
            model_name='uluss',
            name='population',
            field=models.CharField(blank=True, max_length=255, verbose_name='Население улуса'),
        ),
        migrations.AlterField(
            model_name='uluss',
            name='square',
            field=models.CharField(blank=True, max_length=255, verbose_name='Площадь улуса'),
        ),
        migrations.AlterField(
            model_name='uluss',
            name='text',
            field=models.TextField(blank=True, verbose_name='Описание улуса'),
        ),
    ]