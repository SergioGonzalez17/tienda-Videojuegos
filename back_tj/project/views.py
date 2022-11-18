
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from project.models import Games, Category, Clients, Sales
from project.serializadores import GamesSerializer, CategorySerializer, ClientsSerializer, SalesSerializer
from rest_framework.decorators import api_view


# Inicio de peticiones para los juegos #


@api_view(['GET', 'POST', 'DELETE'])
def project_list_games_get(request):
    if request.method == 'GET':
        game_data_get = Games.objects.all()
        games_serializer = GamesSerializer(game_data_get, many=True)
        return JsonResponse(games_serializer.data, safe=False)

@api_view(['GET', 'POST', 'DELETE'])
def project_list_games_post(request):
    if request.method == 'POST':
        games_data = JSONParser().parse(request)
        project_serializer = GamesSerializer(data=games_data)
        if project_serializer.is_valid():
            project_serializer.save()
            return JsonResponse(project_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(project_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def project_list_games_put(request, pk):
    game_update = Games.objects.get(pk=pk)
    if request.method == 'PUT': 
        game_data = JSONParser().parse(request) 
        game_serializer = GamesSerializer(game_update, data=game_data) 
        if game_serializer.is_valid(): 
            game_serializer.save() 
            return JsonResponse(game_serializer.data) 
        return JsonResponse(game_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

@api_view(['GET', 'PUT', 'DELETE'])
def project_list_games_delete(request, pk):
    game_delete = Games.objects.get(pk=pk)
    if request.method == 'DELETE': 
        game_delete.delete() 
        return JsonResponse({'message': 'El juego ha sido eliminado con exito!'}, status=status.HTTP_204_NO_CONTENT)

# Fin de las peticiones para juegos #

# Inicio de peticiones para los clientes #

@api_view(['GET', 'POST', 'DELETE'])
def project_list_clients_get(request):
    if request.method == 'GET':
        clients_data_get = Clients.objects.all()
        clients_serializer = ClientsSerializer(clients_data_get, many=True)
        return JsonResponse(clients_serializer.data, safe=False)

@api_view(['GET', 'POST', 'DELETE'])
def project_list_clients_get_id(request, pk):
    clients_data_id = Clients.objects.get(pk=pk)

    if request.method == 'GET': 
        clients_serializer = ClientsSerializer(clients_data_id) 
        return JsonResponse(clients_serializer.data) 

@api_view(['GET', 'POST', 'DELETE'])
def project_list_clients_get_user(request, name):
    clients_data_id = Clients.objects.get(name_client=name)

    if request.method == 'GET': 
        clients_serializer = ClientsSerializer(clients_data_id) 
        return JsonResponse(clients_serializer.data) 

@api_view(['GET', 'POST', 'DELETE'])
def project_list_clients_post(request):
    if request.method == 'POST':
        clients_data_post = JSONParser().parse(request)
        clients_serializer = ClientsSerializer(data=clients_data_post)
        if clients_serializer.is_valid():
            clients_serializer.save()
            return JsonResponse(clients_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(clients_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def project_list_clients_put(request, pk):
    clients_data_put = Clients.objects.get(pk=pk)
    if request.method == 'PUT': 
        clients_data = JSONParser().parse(request) 
        clients_serializer = ClientsSerializer(clients_data_put, data=clients_data) 
        if clients_serializer.is_valid(): 
            clients_serializer.save() 
            return JsonResponse(clients_serializer.data) 
        return JsonResponse(clients_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

@api_view(['GET', 'PUT', 'DELETE'])
def project_list_clients_delete(request, pk):
    clients_delete = Clients.objects.get(pk=pk)
    if request.method == 'DELETE': 
        clients_delete.delete() 
        return JsonResponse({'message': 'El cliente ha sido eliminado con exito!'}, status=status.HTTP_204_NO_CONTENT)

# Fin de las peticiones para clientes #

# Inicio de peticiones para las categorias #

@api_view(['GET', 'POST', 'DELETE'])
def project_list_category_get(request):
    if request.method == 'GET':
        category_data_get = Category.objects.all()
        category_serializer = CategorySerializer(category_data_get, many=True)
        return JsonResponse(category_serializer.data, safe=False)

@api_view(['GET', 'POST', 'DELETE'])
def project_list_category_post(request):
    if request.method == 'POST':
        category_data_post = JSONParser().parse(request)
        category_serializer = CategorySerializer(data=category_data_post)
        if category_serializer.is_valid():
            category_serializer.save()
            return JsonResponse(category_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(category_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def project_list_category_put(request, pk):
    category_data_put = Category.objects.get(pk=pk)
    if request.method == 'PUT': 
        category_data = JSONParser().parse(request) 
        category_serializer = CategorySerializer(category_data_put, data=category_data) 
        if category_serializer.is_valid(): 
            category_serializer.save() 
            return JsonResponse(category_serializer.data) 
        return JsonResponse(category_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

@api_view(['GET', 'PUT', 'DELETE'])
def project_list_category_delete(request, pk):
    category_delete = Category.objects.get(pk=pk)
    if request.method == 'DELETE': 
        category_delete.delete() 
        return JsonResponse({'message': 'La categoria ha sido eliminada con exito!'}, status=status.HTTP_204_NO_CONTENT)

# Fin de las peticiones para categorias #

# Inicio de peticiones para las ventas #

@api_view(['GET', 'POST', 'DELETE'])
def project_list_sales_get(request):
    if request.method == 'GET':
        sales_data_get = Sales.objects.all()
        sales_serializer = SalesSerializer(sales_data_get, many=True)
        return JsonResponse(sales_serializer.data, safe=False)

@api_view(['GET', 'POST', 'DELETE'])
def project_list_sales_post(request):
    if request.method == 'POST':
        sales_data_post = JSONParser().parse(request)
        sales_serializer = SalesSerializer(data=sales_data_post)
        if sales_serializer.is_valid():
            sales_serializer.save()
            return JsonResponse(sales_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(sales_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Fin de las peticiones para ventas #