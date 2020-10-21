from .views import ProjectList, ProjectDetail, ProjectListDetailfilter, CreateProject, EditProject, AdminProjectDetail, DeleteProject
from django.urls import path


# app_name='api'
# router=DefaultRouter()
# router.register('',PostList,basename='Post')
# urlpatterns=router.urls


urlpatterns = [
    path('', ProjectList.as_view(), name='listProject'),
    path('project/<str:pk>/', ProjectDetail.as_view(), name='detaiproject'),
    path('search/', ProjectListDetailfilter.as_view(), name='searcpProject'),
    
    path('create/', CreateProject.as_view(), name='createproject'),
    path('edit/Projectdetail/<str:pk>/', AdminProjectDetail.as_view(), name='admindetailproject'),
    path('edit/<str:pk>/', EditProject.as_view(), name='editproject'),
    path('delete/<str:pk>/', DeleteProject.as_view(), name='deleteproject'),
]


# urlpatterns=[
      
#     path('',views.apioverview,name="api-overview"),
	
#     path('project-list/', views.projectList, name="project-list"),
# 	path('project-detail/<str:pk>/', views.projectDetail, name="project-detail"),
# 	path('project-create/', views.projectCreate, name="project-create"),
# 	path('project-update/<str:pk>/', views.projectUpdate, name="project-update"),
# 	path('project-delete/<str:pk>/', views.projectDelete, name="project-delete"), 
	 
    
     
# ]