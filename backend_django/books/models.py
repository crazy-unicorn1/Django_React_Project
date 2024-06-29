from django.db import models

class Book(models.Model):
    title = models.CharField("Title", max_length=100)
    author = models.CharField("Author", max_length=50)

    def __str__(self):
        return self.name