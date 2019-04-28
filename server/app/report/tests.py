from django.test import TestCase
from .models import Report
import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from django.core import serializers
from .serializers import ReportSerializer

client = Client()

class GetAllReportsTest(TestCase):
    def setUp(self):
        Report.objects.create(
            reference_id='sample-reference-id-string',
            status="",
            message="",
            source="",
            report_type="")

    def test_get_all_reports(self):
        response = client.get(reverse('get_post_reports'))
        reports = Report.objects.all()
        serializer = ReportSerializer(reports, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class ResolveReportTest(TestCase):
    def setUp(self):
        self.report_1 = Report.objects.create(
            reference_id='sample-reference-id-string',
            status="",
            message="",
            source="",
            report_type="")

    def test_put_report_resolve_status(self):
        response = client.put(
            reverse('report_handler', kwargs={'reference_id': self.report_1.reference_id}),
            data=json.dumps({"target_status": 'RESOLVE'}),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)