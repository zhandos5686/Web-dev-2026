from django.db import models

# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=100)
    priority = models.IntegerField()
    in_completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title