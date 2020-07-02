
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("api/<currency>", views.register, name="register")
]
