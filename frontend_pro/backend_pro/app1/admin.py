from django.contrib import admin
from .models import Author

@admin.register(Author)
class Authoradmin(admin.ModelAdmin):
    list_display = ['id','Aid','Auth_name','Auth_book','Auth_address']
