import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantsService } from '../shared/services/constants';
import { CustomerModel } from '../shared/models/customer.model';
import { CustomerService } from '../shared/services/customer.service';
import { AlertService } from '../shared/services/alert.service';

/**
 * @title Stepper with editable steps
 */
@Component({
  selector: 'app-stepper-wizard',
  templateUrl: 'stepper-wizard.component.html',
  styleUrls: ['stepper-wizard.component.scss']
})
export class StepperWizardComponent implements OnInit {
  customer: CustomerModel;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = false;
  materialstatuses: any;
  educations: any;
  occupations: any;

  // Initialize Slider
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;
  // End Slider

  constructor(private _formBuilder: FormBuilder,
    private customerService: CustomerService,
    private readonly alertService: AlertService,
    private readonly constantsService: ConstantsService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      middleName: null,
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phone: ['', Validators.required],
      company: null
    });
    this.secondFormGroup = this._formBuilder.group({
      address1: ['', Validators.required],
      address2: null,
      address3: null
    });
    this.thirdFormGroup = this._formBuilder.group({
      birthDate: null,
      gender: null,
      maritalStatus: null,
      education: null,
      occupation: null,
      dateFirstPurchase: null,
      yearlyIncome: [true],
      totalChildren: null,
      numberCarsOwned: null,
    });

    this.materialstatuses = this.constantsService.getMaterialStatuses();
    this.educations = this.constantsService.getEducations();
    this.occupations = this.constantsService.getOccupations();
  }

  submit() {
    this.customer = new CustomerModel();
    this.customer.firstName = this.firstFormGroup.value.firstName;
    this.customer.lastName = this.firstFormGroup.value.lastName;
    this.customer.middleName = this.firstFormGroup.value.middleName;
    this.customer.emailAddress = this.firstFormGroup.value.emailAddress;
    this.customer.phone = this.firstFormGroup.value.phone;
    this.customer.addressLine1 = this.secondFormGroup.value.address1;
    this.customer.addressLine2 = this.secondFormGroup.value.address2;
    this.customer.birthDate = this.thirdFormGroup.value.birthDate;
    this.customer.gender = this.thirdFormGroup.value.gender;
    this.customer.maritalStatus = this.thirdFormGroup.value.maritalStatus;
    this.customer.education = this.thirdFormGroup.value.education;
    this.customer.occupation = this.thirdFormGroup.value.occupation;
    this.customer.totalChildren = this.thirdFormGroup.value.totalChildren;
    this.customer.numberCarsOwned = this.thirdFormGroup.value.numberCarsOwned;
    this.customer.dateFirstPurchase = this.thirdFormGroup.value.dateFirstPurchase;
    this.customer.yearlyIncome = this.thirdFormGroup.value.yearlyIncome * 1000;

    this.create(this.customer);
  }

  create(customer: CustomerModel) {
    this.customerService.createCustomer(customer)
      .subscribe((data) => {
        this.alertService.sucess('Successfully Created.');
      },
        error => {
          this.alertService.error(error.body.error);
        });
  }

  basicInfoForm() {
    //console.log(this.firstFormGroup.value);
  }

  addressForm() {
    //console.log(this.secondFormGroup.value);
  }

  additionalInfoForm() {
    //console.log(this.thirdFormGroup.value.yearlyIncome);
  }
}
