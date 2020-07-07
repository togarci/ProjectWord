from django.urls import path
from . import views

urlpatterns = [
    path('cadastro/', views.SingUp.as_view(), name="singup"),
]
