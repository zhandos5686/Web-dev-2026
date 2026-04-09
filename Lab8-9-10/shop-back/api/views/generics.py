from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer


# ─────────────────────────────────────────────
#  PRODUCT endpoints
# ─────────────────────────────────────────────

class ProductListAPIView(generics.ListCreateAPIView):
    """
    GET  /api/products/  → list all products
    POST /api/products/  → create a product
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET    /api/products/<product_id>/
    PUT    /api/products/<product_id>/
    DELETE /api/products/<product_id>/
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'


# ─────────────────────────────────────────────
#  CATEGORY endpoints
# ─────────────────────────────────────────────

class CategoryListAPIView(generics.ListCreateAPIView):
    """
    GET  /api/categories/
    POST /api/categories/
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET    /api/categories/<category_id>/
    PUT    /api/categories/<category_id>/
    DELETE /api/categories/<category_id>/
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


class CategoryProductsAPIView(APIView):
    """
    GET /api/categories/<category_id>/products/
    Returns all products belonging to a specific category.
    Kept as a plain APIView because generics don't cover
    cross-model filtering without a custom get_queryset().
    """

    def get(self, request, category_id):
        try:
            category = Category.objects.get(pk=category_id)
        except Category.DoesNotExist:
            return Response(
                {'error': 'Category not found'},
                status=status.HTTP_404_NOT_FOUND
            )
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
