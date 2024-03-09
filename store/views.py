from django.shortcuts import render

from .models import *

# Create your views here.

def cart(request):

    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
    else:
        items = []

    contxt = {'items': items}
    return render(request, 'store/cart.html', contxt)


def store(request):
    products = Product.objects.all()
    contxt = {'products': products}
    return render(request, 'store/store.html', contxt)


def checkout(request):
    contxt ={}
    return render(request, 'store/checkout.html')
