import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { httpOptions } from '../../config/httpOptions';
import { ProductCategoryModel } from '../models/product-category.model';

@Injectable({ providedIn: 'root' })
export class ProductCategoryService {
  apiUrl = `${environment.apiUrl}/productcategories`;

  constructor(private _http: HttpClient) { }

  getProductCategories(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  getProductCategoriesSubCategories(): Observable<any> {
    return this._http.get(this.apiUrl + '/includesubcategories');
  }

  createProductCategory(productCategory: ProductCategoryModel): Observable<ProductCategoryModel> {
    return this._http.post<ProductCategoryModel>(this.apiUrl, productCategory, httpOptions);
  }

  editProductCategory(productCategory: ProductCategoryModel): Observable<ProductCategoryModel> {
    return this._http.put<ProductCategoryModel>(`${this.apiUrl}/${productCategory.productCategoryKey}`, productCategory, httpOptions);
  }

  deleteProductCategory(id: number): Observable<{}> {
    return this._http.delete(`${this.apiUrl}/${id}`, httpOptions);
  }
}
