from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

class Animal(models.Model):
    """docstring for Palavra."""

    # id do usuário autenticado
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    nome = models.CharField( max_length = 100 )
    username = models.CharField( max_length = 100 )

    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.nome

class Animais(models.Model):
    """docstring for Palavra."""

    # id do usuário autenticado
    nome = models.CharField( max_length = 100 )
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.nome
