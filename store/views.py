from django.shortcuts import render

# Create your views here.

def cart(request):
    contxt ={}
    return render(request, 'store/cart.html')


def store(request):
    contxt ={}
    return render(request, 'store/store.html')


def checkout(request):
    contxt ={}
    return render(request, 'store/checkout.html')

