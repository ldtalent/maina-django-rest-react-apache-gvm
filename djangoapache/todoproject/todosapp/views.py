from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import TodoModel


class TodoViewSet(viewsets.ModelViewSet):
    """
    APi endpoint that allows us to get and create
    todos
    """
    queryset = TodoModel.objects.all()
    serializer_class = TodoSerializer
