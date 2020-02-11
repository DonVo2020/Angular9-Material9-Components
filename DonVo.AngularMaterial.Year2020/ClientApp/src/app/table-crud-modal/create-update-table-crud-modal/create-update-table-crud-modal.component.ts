import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CustomerService } from "../../shared/services/customer.service";
import { CustomerModel } from "../../shared/models/customer.model";
import { AlertService } from "../../shared/services/alert.service";
import { ConstantsService } from "../../shared/services/constants";

@Component({
  selector: "app-create-update-table-crud-modal",
  templateUrl: "./create-update-table-crud-modal.component.html",
  styleUrls: ["./create-update-table-crud-modal.component.scss"]
})
export class CreateUpdateCustomerComponent implements OnInit {
  customer: CustomerModel;
  formFields: FormGroup;
  isChecked: boolean;
  materialstatuses: any;
  educations: any;
  occupations: any;

  constructor(private lexiaDialog: MatDialog,
    private dialogRef: MatDialogRef<CreateUpdateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) data, private customerService: CustomerService,
    private readonly alertService: AlertService, private readonly constantsService: ConstantsService) {
    this.customer = JSON.parse(JSON.stringify(data.resource));
  }

  ngOnInit() {
    this.formFields = new FormGroup({
      customerKey: new FormControl(this.customer ? this.customer.customerKey : 0, [Validators.required]),
      firstName: new FormControl(this.customer ? this.customer.firstName : "", [Validators.required, Validators.maxLength(10)]),
      lastName: new FormControl(this.customer ? this.customer.lastName : "", [Validators.required, Validators.maxLength(10)]),      
      middleName: new FormControl(this.customer ? this.customer.middleName : "", []),
      addressLine1: new FormControl(this.customer ? this.customer.addressLine1 : "", [Validators.required]),
      addressLine2: new FormControl(this.customer ? this.customer.addressLine2 : "", []),
      phone: new FormControl(this.customer ? this.customer.phone : "", [Validators.required, Validators.maxLength(20)]),
      gender: new FormControl(this.customer ? this.customer.gender : "", [Validators.required]),
      maritalStatus: new FormControl(this.customer ? this.customer.maritalStatus : "", [Validators.required]),
      emailAddress: new FormControl(this.customer ? this.customer.emailAddress : "", [Validators.required, Validators.email]),
      birthDate: new FormControl(this.customer ? this.customer.birthDate : "", [Validators.required]),
      education: new FormControl(this.customer ? this.customer.education : "", []),
      occupation: new FormControl(this.customer ? this.customer.occupation : null, []),
      yearlyIncome: new FormControl(this.customer ? this.customer.yearlyIncome : "", []),
      totalChildren: new FormControl(this.customer ? this.customer.totalChildren : "", []),
      numberCarsOwned: new FormControl(this.customer ? this.customer.numberCarsOwned : "", []),
      dateFirstPurchase: new FormControl(this.customer ? this.customer.dateFirstPurchase : "", []),
      houseOwnerFlag: new FormControl(this.customer ? this.customer.houseOwnerFlag : "0", []),
    });

    this.isChecked = this.customer ? this.customer.houseOwnerFlag : false;
    this.materialstatuses = this.constantsService.getMaterialStatuses();
    this.educations = this.constantsService.getEducations();
    this.occupations = this.constantsService.getOccupations();
  }

  update() {
    this.customerService.editCustomer(this.formFields.value)
      .subscribe((data) => {
        this.alertService.sucess('Successfully Updated.');
        this.dialogRef.close({ refresh: true });
      }, error => {
          this.alertService.error(error.body.error);
      });
  }

  create() {
    this.customerService.createCustomer(this.formFields.value)
      .subscribe((data) => {
        this.alertService.sucess('Successfully Created.');
        this.dialogRef.close({ refresh: true });
      },
        error => {
          this.alertService.error(error.body.error);
        });
  }

  submit() {
    if(this.formFields.valid)
    {
      if (this.customer) {
        this.update();
      }
      else {
        this.create();
      }
    }    
  }

  checkCheckBoxValue(event) {
    console.log(this.formFields);
    this.formFields.value.houseOwnerFlag = event.checked ? "1" : "0";
    if (this.customer)
      this.customer.houseOwnerFlag = event.checked;
  }

  cancel() {
    this.dialogRef.close({ refresh: false });
  }

  addOrEdit(list: any[]): string {
    return list.length === 0 ? "add" : "edit";
  }

  getTitle(): string {
    return this.customer ? "Edit Customer" : "Create New Customer";
  }

  getButtonText(): string {
    return this.customer ? "Save" : "Create";
  }
}
