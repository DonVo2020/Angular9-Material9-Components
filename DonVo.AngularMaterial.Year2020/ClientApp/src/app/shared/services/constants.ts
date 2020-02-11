import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  getMaterialStatuses() {
    return materialstatuses;
  }
  getEducations() {
    return educations;
  }
  getOccupations() {
    return occupations;
  }
}

const materialstatuses = [
  { name: 'Married', abbreviation: 'M' },
  { name: 'Single', abbreviation: 'S' },
  { name: 'Divorced', abbreviation: 'D' },
  { name: 'Widowed', abbreviation: 'W' },
  { name: 'Other', abbreviation: 'O' },
];

const educations = [
  { name: 'Associate Degree' },
  { name: 'Bachelors' },
  { name: 'Doctor Degree' },
  { name: 'Graduate Degree' },
  { name: 'High School' },
  { name: 'Master Degree' },
  { name: 'None' },
  { name: 'Other' },
  { name: 'Partial College' },
  { name: 'Partial High School' },
];

const occupations = [
  { name: '' },
  { name: 'Clerical' },
  { name: 'Management' },
  { name: 'Manual' },
  { name: 'Professional' },
  { name: 'Other' },
];
