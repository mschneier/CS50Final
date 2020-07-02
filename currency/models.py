from django.db import models

# Create your models here.
class CurrencyModel(models.Model):
    CURRENCY_CHOICES = [
        ("EUR", "Euro"),
        ("GBP", "British Pound"),
        ("CAD", "Canadian Dollar"),
        ("AUD", "Australian Dollar"),
        ("CNY", "Chinese Yuan"),
        ("XAU", "Gold (oz.)"),
        ("INR", "Indian Rupee"),
        ("JPY", "Japanese Yen"),
        ("MXN", "Mexican Peso")
    ]
    usd = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=3, choices=CURRENCY_CHOICES)
