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
  showTreeDynamicData() {
    this.router.navigate(["tree-dynamic-data"]);
  }
  showTreeCheckboxes() {
    this.router.navigate(["tree-checkboxes"]);
  }
  showStepperWizard() {
    this.router.navigate(["stepper-wizard"]);
  }
  showLogin() {
    this.router.navigate(["login"]);
  }
  showDragDrop() {
    this.router.navigate(["drag-drop"]);
  }
  showChipsAutoComplete() {
    this.router.navigate(["chips-autocomplete"]);
  }
  showChipsInput() {
    this.router.navigate(["chips-input"]);
  }
}
