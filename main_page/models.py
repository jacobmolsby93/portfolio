from django.db import models

# Create your models here.


class Testimonial(models.Model):
    """
    Model for testimonials
    """
    full_name = models.CharField(max_length=254)
    headshot = models.ImageField()
    work_url = models.URLField()
    review = models.TextField()

    def __str__(self):
        return str(self.full_name)
    

class Projects(models.Model):
    """
    Model for projects
    """
    project_name = models.CharField(max_length=254)
    project_image = models.ImageField()
    project_description = models.TextField()
    languages_used = models.CharField(max_length=254)
    frameworks_used = models.CharField(max_length=254)
    project_github_url = models.URLField()
    project_deployed_url = models.URLField()

    def __str__(self):
        return self.project_name


