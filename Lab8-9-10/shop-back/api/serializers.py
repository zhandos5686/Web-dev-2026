from rest_framework import serializers
from api.models import Product, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description']


class ProductSerializer(serializers.ModelSerializer):
    # Read-only nested category; write via category (FK id)
    category_detail = CategorySerializer(source='category', read_only=True)

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description',
            'price', 'stock',
            'category',        # writable FK id
            'category_detail', # read-only nested object
            'created_at', 'updated_at',
        ]
        read_only_fields = ['created_at', 'updated_at']
