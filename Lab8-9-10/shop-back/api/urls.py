from django.urls import path
from api.views import (
    ProductListAPIView, ProductDetailAPIView,
    CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView,
)

# ── For Level 2 (FBV), swap the imports above for:
# from api.views import (
#     products_list, product_detail,
#     categories_list, category_detail, category_products,
# )
# … and use the fbv_urlpatterns list at the bottom instead.

urlpatterns = [
    # ── Products ──────────────────────────────────────
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),

    # ── Categories ────────────────────────────────────
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='category-products'),
]

# ── FBV equivalents (Level 2) — uncomment if using fbv.py ────────
# fbv_urlpatterns = [
#     path('products/', products_list, name='product-list'),
#     path('products/<int:product_id>/', product_detail, name='product-detail'),
#     path('categories/', categories_list, name='category-list'),
#     path('categories/<int:category_id>/', category_detail, name='category-detail'),
#     path('categories/<int:category_id>/products/', category_products, name='category-products'),
# ]
