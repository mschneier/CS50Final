from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from .models import CurrencyModel

def index(request):
    return render(request, "index.html")


def api(request, currency):
    url = f"https://api.exchangeratesapi.io/latest?base=USD&symbols={currency}"
    response = jsonify(get(url).text)
    return response
