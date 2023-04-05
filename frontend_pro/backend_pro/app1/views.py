from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Author
from .serializer import AuthorSerializer
from rest_framework import status 
from django.shortcuts import get_object_or_404


class AuthorAPI(APIView):
    def get(Self,request):
        authors = Author.objects.all()
        serializer = AuthorSerializer(authors,many=True)
        return Response (data=serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        serializer = AuthorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data,status=status.HTTP_201_CREATED)
        return Response(data=serializer.error,status=status.HTTP_400_BAD_REQUEST)
    
class AuthorDetailsAPI(APIView):
    
    def get(self,request,pk=None):
        try:
            obj = Author.objects.get(pk=pk)
        except Author.DoesNotExist as e:
            return Response(data={'details':'Not found'},status=status.HTTP_404_NOT_FOUND)
        obj = get_object_or_404(Author,pk=pk)
        serializer = AuthorSerializer(obj)
        return Response(data=serializer.data)
    
    def put (self,request,pk=None):
        obj = get_object_or_404(Author,pk=pk)
        serializer = AuthorSerializer(data = request.data,instance=obj)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def patch (self,request,pk=None):
        obj = get_object_or_404(Author,pk=pk)
        serializer = AuthorSerializer(data = request.data,instance=obj,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete (self,request,pk=None):
        obj = get_object_or_404(Author,pk=pk)
        obj.delete()
        return Response(data=None,status=status.HTTP_204_NO_CONTENT)
