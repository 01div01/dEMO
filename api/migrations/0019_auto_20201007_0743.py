# Generated by Django 3.1.1 on 2020-10-07 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_auto_20201007_0726'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='projectDescription',
            field=models.CharField(default='No Members', max_length=124),
        ),
        migrations.AlterField(
            model_name='project',
            name='projectCreatedAt',
            field=models.CharField(default='2020-10-07 07:43:37', max_length=32),
        ),
        migrations.AlterField(
            model_name='project',
            name='projectModifiedAt',
            field=models.CharField(default='2020-10-07 07:43:37', max_length=32),
        ),
    ]
