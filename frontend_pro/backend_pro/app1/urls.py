from django.urls import path
from . import views

urlpatterns = [
    path('author/',views.AuthorAPI.as_view()),
    path('author/<int:pk>/',views.AuthorDetailsAPI.as_view()),
]