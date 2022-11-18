from django.urls import re_path
from project import views 
 
urlpatterns = [ 
    re_path(r'^api/project/games_get$', views.project_list_games_get),
    re_path(r'^api/project/games_post$', views.project_list_games_post),
    re_path(r'^api/project/games_put(?P<pk>[0-9]+)$', views.project_list_games_put),
    re_path(r'^api/project/games_delete(?P<pk>[0-9]+)$', views.project_list_games_delete),

    re_path(r'^api/project/clients_get$', views.project_list_clients_get),
    re_path(r'^api/project/clients_get(?P<pk>[0-9]+)$', views.project_list_clients_get_id),
    re_path(r'^api/project/clients_get_user(?P<name>.*)$', views.project_list_clients_get_user),
    re_path(r'^api/project/clients_post$', views.project_list_clients_post),
    re_path(r'^api/project/clients_put(?P<pk>[0-9]+)$', views.project_list_clients_put),
    re_path(r'^api/project/clients_delete(?P<pk>[0-9]+)$', views.project_list_clients_delete),

    re_path(r'^api/project/category_get$', views.project_list_category_get),
    re_path(r'^api/project/category_post$', views.project_list_category_post),
    re_path(r'^api/project/category_put(?P<pk>[0-9]+)$', views.project_list_category_put),
    re_path(r'^api/project/category_delete(?P<pk>[0-9]+)$', views.project_list_category_delete),

    re_path(r'^api/project/sales_get$', views.project_list_sales_get),
    re_path(r'^api/project/sales_post$', views.project_list_sales_post),

]