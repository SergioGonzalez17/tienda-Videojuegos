from django.db import models

# Create your models here.
class Games(models.Model):
    id_game = models.BigAutoField(primary_key=True)
    name_game = models.TextField(max_length=60)
    price = models.CharField(max_length=8)
    category = models.CharField(max_length=60)

class Clients(models.Model):
    id_client = models.BigAutoField(primary_key=True)
    mail = models.CharField(max_length=40)
    name_client = models.TextField(max_length=80)
    password = models.TextField(max_length=30)

class Sales(models.Model):
    id_sales = models.BigAutoField(primary_key=True)
    id_client = models.IntegerField() 
    id_game = models.IntegerField()
    amount = models.IntegerField()
    value = models.IntegerField()
    total_Sale = models.IntegerField()

class Category(models.Model):
    id_category = models.BigAutoField(primary_key=True)
    name_category = models.TextField(max_length=80)
    codigo = models.TextField(max_length=10)