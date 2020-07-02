from django.shortcuts import render

from .forms import CurrencyForm

def index(request):
    return render(request, "index.html", {"form": CurrencyForm()})


def api(request, currency):
    url = f"https://api.exchangeratesapi.io/latest?base=USD&symbols={currency}"
    response = jsonify(get(url).text)
    return response
