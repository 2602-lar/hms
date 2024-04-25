from django.db import models

# Create your models here.

class Doctor(models.Model):
  doc_id = models.CharField(max_length=100, primary_key=True)  
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  specialisation = models.CharField(max_length=254)
  on_duty = models.CharField(max_length=255)
  
class Patient(models.Model):
    patient_id = models.CharField(max_length=100, primary_key=True)
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    national_id = models.CharField(max_length=100, unique=True, default='NULL')
    gender = models.CharField(max_length=100)
    age = models.IntegerField()
    date_of_birth = models.DateField()
    contact = models.CharField(max_length=255, default='NULL')
    address = models.CharField(max_length=255, default='NULL')
    allergies = models.CharField(max_length=255)
    chronic_diseases = models.CharField(max_length=255)
    nok_name = models.CharField(max_length=255, default='NULL')
    nok_relationship = models.CharField(max_length=255, default='NULL')
    nok_contact = models.CharField(max_length=255, default='NULL')
    admitted = models.CharField(max_length=255, default='NULL')
  
class Ambulance(models.Model):
  Vehicle_regnumber = models.CharField(max_length=255)
  driver_fullname = models.CharField(max_length=255)
  driver_contact = models.CharField(max_length=255)
  deployment = models.CharField(max_length=255)
  
class Appointment(models.Model): 
  patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
  doc_id = models.ForeignKey(Doctor, on_delete=models.CASCADE, null=True)
  date = models.DateField()
  time = models.TimeField()
  
  class Meta:
      constraints = [
            models.UniqueConstraint(fields=['doc_id', 'date', 'time'], name='unique booking for doctors'),
        ]
  
class Ward(models.Model):
  name = models.CharField(max_length=255)
  gender = models.CharField(max_length=10)
  age = models.IntegerField()
  type_of_ward = models.CharField(max_length=255)
  capacity = models.IntegerField()
  addmitted = models.IntegerField()
  
class Addmissions(models.Model):
  patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
  ward = models.ForeignKey(Ward, on_delete=models.CASCADE)
  bed = models.IntegerField(default=00)
  date_of_admission = models.DateField(max_length=255, default='NULL')
  date_of_discharge = models.DateField(max_length=255, null = True)
  status = models.CharField(max_length = 100, default='NULL')
   
class Bill(models.Model):
  patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
  biller_fullname = models.CharField(max_length=255)
  item = models.CharField(max_length=255)
  paid = models.CharField(max_length=10)
  amount = models.IntegerField()
  currency = models.CharField(max_length=100)
  date = models.DateTimeField( auto_now=True, auto_now_add=False)

class Diagnosis(models.Model):
  patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
  doc_id = models.ForeignKey(Doctor,  on_delete=models.CASCADE)
  date = models.DateTimeField( auto_now=True, auto_now_add=False)
  symptoms = models.TextField()
  diagnosis = models.CharField(max_length=255)
  prescription = models.CharField(max_length=255)
  
class Test(models.Model):
  patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
  doc_id = models.ForeignKey(Doctor, on_delete=models.CASCADE)
  tested_by = models.TextField()
  test = models.TextField()
  date = models.DateField( auto_now=True, auto_now_add=False)
  test_results = models.TextField()
