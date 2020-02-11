import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  showFileUpload() {
    this.router.navigate(["file-upload"]);
  }
  showFormFields() {
    this.router.navigate(["form-fields"]);
  }
  showTableCrudModal() {
    this.router.navigate(["table-crud-modal"]);
  }
  showTableDetailsDrilldown() {
    this.router.navigate(["table-details-drilldown"]);
  }
}
