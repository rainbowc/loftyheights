# Generated by Django 3.2.1 on 2024-03-02 00:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courier_app', '0003_auto_20240226_2138'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shipping',
            name='status',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
