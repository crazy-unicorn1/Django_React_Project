# Generated by Django 5.0.6 on 2024-06-29 12:26

from django.db import migrations

def create_data(apps, schema_editor):
    Student = apps.get_model('books', 'Book')
    Student(title="Django Learning", author="Matt").save()


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
