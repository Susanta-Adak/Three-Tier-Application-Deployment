from django.contrib import admin
from django.urls import path
from api.views import HelloWorldView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/hello/', HelloWorldView.as_view()),
]
