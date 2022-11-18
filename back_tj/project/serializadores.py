from rest_framework import serializers 
from project.models import Games, Category, Clients, Sales
 
 
class GamesSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Games
        fields = ('id_game',
                  'name_game',
                  'price',
                  'category')


class CategorySerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Category
        fields = ('id_category',
                  'name_category',
                  'codigo')

class ClientsSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Clients
        fields = ('id_client', 
                  'mail', 
                  'name_client',
                  'password')

class SalesSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Sales
        fields = ('id_sales',
                  'id_client',
                  'id_game',  
                  'amount', 
                  'value', 
                  'total_Sale')             