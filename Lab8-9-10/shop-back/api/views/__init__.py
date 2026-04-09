# ──────────────────────────────────────────────────────────────────
#  api/views/__init__.py
#  Change the import below to switch between view implementations.
#  All levels expose the same public names, so urls.py never changes.
# ──────────────────────────────────────────────────────────────────

# Level 2 — Function-Based Views
# from api.views.fbv import (
#     products_list, product_detail,
#     categories_list, category_detail, category_products,
# )

# Level 3 — Class-Based Views (APIView)
# from api.views.cbv import (
#     ProductListAPIView, ProductDetailAPIView,
#     CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView,
# )

# Level 4 — Mixins
# from api.views.mixins import (
#     ProductListAPIView, ProductDetailAPIView,
#     CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView,
# )

# Level 5 — Generic Views  ← ACTIVE
from api.views.generics import (
    ProductListAPIView, ProductDetailAPIView,
    CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView,
)
