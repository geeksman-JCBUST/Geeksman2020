# Generated by Django 2.2 on 2020-04-15 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_event_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='status',
            field=models.CharField(max_length=1000, null=True),
        ),
    ]
