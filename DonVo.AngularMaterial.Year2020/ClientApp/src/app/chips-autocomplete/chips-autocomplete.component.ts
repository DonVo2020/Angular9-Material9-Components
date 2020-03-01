import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-chips-autocomplete',
  templateUrl: './chips-autocomplete.component.html',
  styleUrls: ['./chips-autocomplete.component.scss']
})
export class ChipsAutoCompleteComponent implements OnInit {

  ngOnInit(): void {
  }

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  bookCtrl = new FormControl();
  filteredBooks: Observable<string[]>;
  selectedBooks: string[] = ['.Net Core 3.1'];
  allBooks: string[] = ['SQL Server 2019', 'Angular 9', 'Machine Learning', '.Net Core 3.1', 'Micro-Services', 'Javascript','DevOps'];

  @ViewChild('bookInput') bookInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredBooks = this.bookCtrl.valueChanges.pipe(
      startWith(null),
      map((book: string | null) => book ? this._filter(book) : this.allBooks.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our book
    if ((value || '').trim()) {
      this.selectedBooks.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.bookCtrl.setValue(null);
  }

  remove(book: string): void {
    const index = this.selectedBooks.indexOf(book);

    if (index >= 0) {
      this.selectedBooks.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedBooks.push(event.option.viewValue);
    this.bookInput.nativeElement.value = '';
    this.bookCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allBooks.filter(book => book.toLowerCase().indexOf(filterValue) === 0);
  }
}


