import {Component, OnInit, ViewChild} from "@angular/core";
import { MatTableDataSource} from '@angular/material/table';
import { CustomerModel } from "../shared/models/customer.model";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CustomerService } from "../shared/services/customer.service";
import { CreateUpdateCustomerComponent } from "./create-update-table-crud-modal/create-update-table-crud-modal.component";
import { AlertService } from "../shared/services/alert.service";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-table-crud-modal",
  templateUrl: "./table-crud-modal.component.html",
  styleUrls: ["../category.scss"]
})
export class TableCrudModalComponent implements OnInit {
  displayedColumns: string[] = ['customerKey', 'firstName', 'lastName', 'phone', 'emailAddress', 'birthDate',
    'gender', 'maritalStatus', 'education', 'action'];
  dataSource: MatTableDataSource<CustomerModel>;
  value: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private customerService: CustomerService, private readonly alertService: AlertService,
    private createCustomerDialog: MatDialog) {
  }

  ngOnInit() {
    this.resetTable();
  }

  resetTable() {
    this.customerService.getCustomers().subscribe((customers) => {
      this.dataSource = new MatTableDataSource(customers);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clear() {
    this.dataSource.filter = this.value = "";
  }

  rowCount() {
    return this.dataSource ? this.dataSource.filteredData.length : 0;
  }

  create() {
    this.createOrEditResource(false);
  }

  editRow(customer: CustomerModel) {
    this.createOrEditResource(true, customer);
  }

  createOrEditResource(editMod: boolean, resource: CustomerModel = null) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      resource: resource,
      editMod: editMod,
    };
    const dialogRef = this.createCustomerDialog.open(CreateUpdateCustomerComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data.refresh) {
        this.resetTable();
        this.dataSource.sort = this.sort;
      }
    });
  }

  deleteRow(customerKey: number) {
    this.customerService.deleteCustomer(customerKey).subscribe((data) => {
      this.alertService.sucess('Successfully Delete.');
      this.resetTable();
    },
      error => {
        this.alertService.error(error.body.error);
      });;
  }
}

