# from django.shortcuts import render
# from django.http import JsonResponse
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .serializers import ProjectSerializer
# from .models import Project
# from rest_framework.parsers import MultiPartParser, FormParser
# from rest_framework import viewsets
# from django.shortcuts import get_object_or_404
# from api.models import Project

# Create your views here.
from django.shortcuts import get_object_or_404
from .models import Project
from .serializers import ProjectSerializer
from rest_framework import viewsets, filters, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView


# class PostList(viewsets.ModelViewSet):
# 	serializer_class = ProjectSerializer
# 	queryset = Project.objects.all()


# class PostDetails(generics)
# 	def get_object(self,queryset=None, **kwargs):
# 		item=self.kwargs.get('pk')
# 		return get_object_or_404(Project,projectName=item)
# 	def get_queryset(self):
# 		return Project.objects.all()



class ProjectList(generics.ListAPIView):

    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class ProjectDetail(generics.RetrieveAPIView):

    serializer_class = ProjectSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Project, projectName=item)



class ProjectListDetailfilter(generics.ListAPIView):
  
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^projectName']



class CreateProject(generics.CreateAPIView):
    
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class AdminProjectDetail(generics.RetrieveAPIView):
   
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class EditProject(generics.UpdateAPIView):
    
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class DeleteProject(generics.RetrieveDestroyAPIView):
    
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()



# class PostList(viewsets.ViewSet):
# 	# permission_class=[authentication]
# 	project = Project.objects.all()
# 	def list(self,request):
# 		serializer = ProjectSerializer(self.project, many=True)
# 		return Response(serializer.data)

# 	def retrieve(self,request,pk=None):
# 		post=get_object_or_404(self.project,pk=pk)
# 		serializer = ProjectSerializer(post)
# 		return Response(serializer.data)
# 	def update(self,request,pk=None):
# 		post=get_object_or_404(self.project,pk=pk)
# 		serializer = ProjectSerializer(post)
# 		return Response(serializer.data)
		



# @api_view(['GET'])
# def apioverview(request):
# 	api_urls = {
# 		'List':'/project-list/',
# 		'Detail View':'/project-detail/<str:pk>/',
# 		'Create':'/project-create/',
# 		'Update':'/project-update/<str:pk>/',
# 		'Delete':'/project-delete/<str:pk>/',
# 		}

# 	return Response(api_urls)
# @api_view(['GET'])
# def projectList(request):
# 	project = Project.objects.all()
# 	serializer = ProjectSerializer(project, many=True)
# 	return Response(serializer.data)


# @api_view(['GET'])
# def projectDetail(request, pk):
# 	projects = Project.objects.get(id=pk)
# 	serializer = ProjectSerializer(projects, many=False)
# 	return Response(serializer.data)


# @api_view(['POST','GET'])
# def projectCreate(request):
# 	serializer = ProjectSerializer(data=request.data)
# 	parser_classes=[MultiPartParser,FormParser]

# 	if serializer.is_valid():
# 		serializer.save()

# 	return Response(serializer.data)

# @api_view(['POST'])
# def projectUpdate(request, pk):
# 	project = Project.objects.get(id=pk)
# 	serializer = ProjectSerializer(instance=project, data=request.data)

# 	if serializer.is_valid():
# 		serializer.save()

# 	return Response(serializer.data)


# @api_view(['DELETE','GET'])
# def projectDelete(request, pk):
# 	project = Project.objects.get(id=pk)
# 	project.delete()

# 	return Response('Item succsesfully delete!')
