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

HTTP_METHOD_GET = "GET"
HTTP_METHOD_PUT = "PUT"

@csrf_exempt
def report_handler(request, reference_id=""):
    if request.method == HTTP_METHOD_PUT:
        body = json.loads(request.body)

        if ('target_status' in body):
            state = body['target_status']
            try:
                r = Report.objects.get(reference_id=reference_id)
            except Report.DoesNotExist:
                return JsonResponse({}, status=status.HTTP_404_NOT_FOUND)

            if state == "BLOCK":
                r.status = "BLOCK"
            elif state == "RESOLVE":
                r.status = "RESOLVE"
            r.save()

            return JsonResponse({"reference_id": r.status}, safe=False)
        else:
            return JsonResponse({}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return JsonResponse({}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view([HTTP_METHOD_GET])
def get_post_reports(request):
    if request.method == HTTP_METHOD_GET:
        try:
            reports = Report.objects.all()
        except Report.DoesNotExist:
            Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ReportSerializer(reports, many=True)

        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)