from django.conf.urls import  url
from .views import  FetchList, report_handler

urlpatterns = [
    url(r'^$', FetchList.as_view(), name='fetch-view'),
    url(r'^(?P<reference_id>[-\w]+)/$', report_handler),
]
