from django.db import models
from django.contrib.auth.models import User

class Book(models.Model):
    title = models.CharField("Title", max_length=100)
    author = models.CharField("Author", max_length=50)

    def __str__(self):
        return self.name
    
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)

    def __str__(self):
        return self.user.username