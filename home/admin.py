from django.contrib import admin

# Register your models here.

from .models import Animal
from .models import Animais
# Register your models here.
admin.site.register(Animal)
admin.site.register(Animais)
