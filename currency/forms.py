from django.forms import ModelForm
from .models import CurrencyModel

class CurrencyForm(ModelForm):
    class Meta:
        model = CurrencyForm
        fields = ["usd", "currency"]
