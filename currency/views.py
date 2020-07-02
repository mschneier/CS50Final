from django.http import JsonResponse
from django.shortcuts import render
from requests import get

from .forms import CurrencyForm

def index(request):
    return render(request, "index.html", {"form": CurrencyForm()})


def api(request, currency):
    url = f"https://api.exchangeratesapi.io/latest?base=USD&symbols={currency}"
    response = JsonResponse(get(url).text, safe=False)
    return response
