from django.shortcuts import render
from .forms import TestimonialForm
from django.conf import settings
from django.http import HttpResponse
from .models import Testimonial, Projects
# Create your views here.


def index(request):
    """
    A view to show a detail view of the product
    """
    testimonials = Testimonial.objects.all()

    context = {
        'testimonials': testimonials,
    }

    return render(request, 'main/index.html', context)


def portfolio_view(request):
    """
    View for portfolio page
    """
    projects = Projects.objects.all()

    context = {
        "projects": projects
    }

    return render(request, 'main/portfolio.html', context)


def about_view(request):
    """ 
    View for about me page.
    """
    return render(request, 'main/about.html')
