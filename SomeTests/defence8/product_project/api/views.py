from django.http import JsonResponse
from .models import Product

def product_list(request):
    products = Product.objects.all().values('name', 'price', 'quantity', 'in_stock', 'visits')
    return JsonResponse(list(products), safe=False)

def product_id(request, id):
    try:
        product = Product.objects.get(id=id)
        product.visits=+1
        product.save()
        data = {
            'name': product.name,
            'price': product.price,
            'quantity': product.quantity,
            'in_stock': product.in_stock,
            'visits': product.visits
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)
# Create your views here.
