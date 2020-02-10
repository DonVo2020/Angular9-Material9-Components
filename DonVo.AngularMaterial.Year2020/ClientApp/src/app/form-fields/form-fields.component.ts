import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../shared/services/customer.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent {
  isFormEdit: boolean;

  formFields = this._fb.group({
    firstName: [null, [Validators.required, Validators.maxLength(10)]],
    lastName: [null, [Validators.required, Validators.maxLength(10)]],
    address: [null, Validators.required],
    address2: null,
    middleName: null,
    phone: [null, [Validators.required, Validators.maxLength(13)]],
    gender: [null, Validators.required],
    maritalStatus: [null, Validators.required],
    emailAddress: [null, [Validators.required,Validators.email]],
    birthDate: [null, Validators.required],
    education: null,
    occupation: null,
    yearlyIncome: null,
    totalChildren: null,
    numberCarsOwned: null,
    dateFirstPurchase: null,
    houseOwnerFlag: null,
  });

  materialstatuses = [
    { name: 'Married', abbreviation: 'M' },
    { name: 'Single', abbreviation: 'S' },
    { name: 'Divorced', abbreviation: 'D' },
    { name: 'Widowed', abbreviation: 'W' },
    { name: 'Other', abbreviation: 'O' },
  ];

  constructor(private _fb: FormBuilder, private readonly _customerService: CustomerService, private readonly _alertService: AlertService) {}

  onSubmit() {
    this.isFormEdit ? this.update() : this.create();
  }

  update() {
    this._customerService.editCustomer(this.formFields.value).subscribe(
      res => {
        this._alertService.sucess('update');
      },
      error => {
        this._alertService.error(error.body.error);
      },
    );
  }

  create() {
    this._customerService.createCustomer(this.formFields.value).subscribe(
      res => {
        this._alertService.sucess('create');
      },
      error => {
        this._alertService.error(error.body.error);
      },
    );
  }
}
