from django.db import models


# Create your models here.

class TodoModel(models.Model):
    """
    Todo models
    """
    title = models.CharField(max_length=120)
    description = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True, blank=True)
