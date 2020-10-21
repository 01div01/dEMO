from django.db import models
from django.utils.translation import gettext_lazy as _


# Create your models here.

def upload_to(instance,filename):
    return 'posts/{filename}'.format(filename=filename)
class Project(models.Model):
    id = models.AutoField(primary_key=True)
    projectName=models.CharField(max_length=32)
    projectMembers=models.CharField(max_length=32, default='No Members')
    # picture
    project_pic=models.ImageField(_("Image"), upload_to=upload_to,default='posts/default.jpg')
    projectStatus=models.BooleanField(default=True)
    projectDescription=models.CharField(max_length=124, default='No Members')
    projectCreatedBy=models.CharField(max_length=32, default='User')
    projectModifiedBy=models.CharField(max_length=32, default='User')
    projectCreatedAt=models.DateTimeField(auto_now_add=True)
    projectModifiedAt=models.DateTimeField(auto_now=True)
   
    def __str__(self):
        return self.projectName
        
