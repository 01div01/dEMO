# Generated by Django 3.1.1 on 2020-10-07 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_auto_20201007_0722'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='projectCreatedAt',
            field=models.CharField(default='2020-10-07 07:23:36', max_length=32),
        ),
        migrations.AlterField(
            model_name='project',
            name='projectModifiedAt',
            field=models.CharField(default='2020-10-07 07:23:36', max_length=32),
        ),
    ]
