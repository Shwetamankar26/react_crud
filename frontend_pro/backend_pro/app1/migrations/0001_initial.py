# Generated by Django 4.1.7 on 2023-03-22 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Aid', models.IntegerField()),
                ('Auth_name', models.CharField(max_length=30)),
                ('Auth_book', models.CharField(max_length=30)),
                ('Auth_address', models.CharField(max_length=30)),
            ],
        ),
    ]