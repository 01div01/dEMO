# Generated by Django 3.1.1 on 2020-09-30 07:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('projectName', models.CharField(max_length=32)),
                ('projectMembers', models.CharField(max_length=32)),
                ('projectName1', models.CharField(max_length=32)),
            ],
        ),
    ]
