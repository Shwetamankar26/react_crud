from rest_framework import serializers
from .models import Author

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = (
            'id',
            'Aid',
            'Auth_name',
            'Auth_book',
            'Auth_address'
        )