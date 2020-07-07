from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
# import reverse e igual ao redirect usado em classe
from django.urls import reverse_lazy
from django.views import generic


# Create your views here.
class SingUp(generic.CreateView):
    form_class = UserCreationForm
    #redirect para o login
    success_url = reverse_lazy('login')
    template_name = 'registration/cadastro.html'
