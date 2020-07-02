from django.db import models

# Create your models here.
class CurrencyModel(models.Model):
    currency = models.DecimalField()
