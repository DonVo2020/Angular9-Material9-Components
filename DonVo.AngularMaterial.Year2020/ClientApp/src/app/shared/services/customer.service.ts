import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { httpOptions } from '../../config/httpOptions';
import { CustomerModel } from '../models/customer.model';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  apiUrl = `${environment.apiUrl}/customers`;

  constructor(private _http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  createCustomer(customer: CustomerModel): Observable<CustomerModel> {
    return this._http.post<CustomerModel>(this.apiUrl, customer, httpOptions);
  }

  editCustomer(customer: CustomerModel): Observable<CustomerModel> {
    return this._http.put<CustomerModel>(`${this.apiUrl}/${customer.customerKey}`, customer, httpOptions);
  }

  deleteCustomer(id: number): Observable<{}> {
    return this._http.delete(`${this.apiUrl}/${id}`, httpOptions);
  }
}
