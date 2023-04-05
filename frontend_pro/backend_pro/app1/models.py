from django.db import models

class Author(models.Model):
     Aid = models.IntegerField()
     Auth_name =  models.CharField(max_length=30)
     Auth_book =  models.CharField(max_length=30)
     Auth_address = models.CharField(max_length=30)


     def __str__(self):
          return f'{self.Auth_name}'

