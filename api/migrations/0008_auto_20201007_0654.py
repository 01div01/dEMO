# Generated by Django 3.1.1 on 2020-10-07 06:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20201007_0644'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='projectCreatedAt',
            field=models.DateField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='project',
            name='projectModifiedAt',
            field=models.DateField(default=datetime.datetime.now),
        ),
    ]
