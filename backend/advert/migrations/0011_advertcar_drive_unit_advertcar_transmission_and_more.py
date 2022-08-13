# Generated by Django 4.1 on 2022-08-12 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advert', '0010_alter_advertcar_category_alter_adverthome_category_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='advertcar',
            name='drive_unit',
            field=models.CharField(choices=[('FORWARD', 'Forward'), ('BACK', 'Back'), ('FULL', 'Full')], default='BACK', max_length=128, verbose_name='Привод авто'),
        ),
        migrations.AddField(
            model_name='advertcar',
            name='transmission',
            field=models.CharField(choices=[('AUTOMATIC', 'Automatic'), ('VARIABLE', 'Variable'), ('MANUAL', 'Manual')], default='AUTOMATIC', max_length=128, verbose_name='Коробка авто'),
        ),
        migrations.AddField(
            model_name='advertcar',
            name='views',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='advertfood',
            name='views',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='adverthome',
            name='views',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='advertjobs',
            name='views',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='advertrent',
            name='improvement',
            field=models.CharField(choices=[('WAS_USED', 'Was Used'), ('BLACK', 'Black'), ('GAS', 'Gas')], default='BLACK', max_length=128, verbose_name='Благоустройство'),
        ),
        migrations.AddField(
            model_name='advertrent',
            name='views',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='advertservice',
            name='views',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]