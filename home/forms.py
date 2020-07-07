from django import forms
from .models import Animal

class CompleteForm(forms.ModelForm):
    class Meta:
        model = Animal
        fields = ('nome','username')
