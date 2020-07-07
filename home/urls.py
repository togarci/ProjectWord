from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.inicio, name="inicio"),
    path('home/', views.home, name="home"),
    path('ARjs/<str:word>', views.arjs, name='arjs'),
]
