# Generated by Django 4.2.4 on 2024-04-02 13:31

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('community', '0004_alter_community_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='community',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='community_images/'),
        ),
        migrations.AddField(
            model_name='community',
            name='members',
            field=models.ManyToManyField(related_name='Members', to=settings.AUTH_USER_MODEL),
        ),
    ]
