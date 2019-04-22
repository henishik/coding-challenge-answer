import json
from django.shortcuts import render
from django.http import QueryDict, JsonResponse, HttpResponse
from django.views.generic import View
from django.views.decorators.csrf import csrf_exempt
from .models import Report

class FetchList(View):
    def get(self, request, *args, **kwargs):
        all_reports = Report.objects.all()
        json_to_response = {"reports": []}

        for report in all_reports:
            json_to_response["reports"].append({
            "id": report.reference_id,
            "source": "REPORT",
            "state": report.status,
            "payload": {
                "source": "REPORT",
                "reportType": report.report_type,
                "message": "",
                "reportId": "",
            },
            "created": report.created_at
        })

        return JsonResponse(json_to_response, safe=False)

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
