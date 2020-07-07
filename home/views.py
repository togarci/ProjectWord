from django.shortcuts import render, get_object_or_404, redirect
from .models import Animal
from .models import Animais
from .forms import CompleteForm
from django.contrib.auth.decorators import login_required

# Create your views here.
def inicio(request):
    return redirect('/home')
@login_required
def home(request):
    animais = Animais.objects.all()
    list = []
    anl = Animal.objects.filter(user=request.user)
    for x in anl:
        list.append(x.nome)


    return render(request, 'html/index.html',{'listaFeitos':list, 'animais':animais})

@login_required
def arjs(request, word):
    v = Animal.objects.filter(nome=word, user=request.user)
    if (request.method == "POST") and (len(v) == 0) :
        form = CompleteForm(request.POST)
        if form.is_valid():
            save = form.save(commit=False)
            save.user = request.user
            save.save()

        return redirect('/home')


    else:
        return render(request, 'html/ARjs.html', {'word':word})
