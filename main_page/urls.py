from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('portfolio/', views.portfolio_view, name='portfolio'),
    path('about/', views.about_view, name='about')
]
