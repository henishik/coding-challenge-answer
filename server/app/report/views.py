import json
from django.shortcuts import render
from django.http import QueryDict, JsonResponse, HttpResponse
from django.views.generic import View
from django.views.decorators.csrf import csrf_exempt
from .models import Report
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ReportSerializer

@csrf_exempt
def report_handler(request, reference_id=""):
    if request.method == "PUT":
        body = json.loads(request.body)
        status = body['target_status']

        r = Report.objects.get(reference_id=reference_id)

        if status == "BLOCK":
            r.status = "BLOCK"
        elif status == "RESOLVE":
            r.status = "RESOLVE"
        r.save()

        return JsonResponse({"reference_id": r.status}, safe=False)

@api_view(['GET', 'POST'])
def get_post_reports(request):
    if request.method == 'GET':
        reports = Report.objects.all()
        serializer = ReportSerializer(reports, many=True)

        return Response(serializer.data)
    elif request.method == 'POST':
        return Response({})