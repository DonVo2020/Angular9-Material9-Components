import { Observable } from "rxjs";
import { ProductSubCategoryModel } from "./product-subcategory.model";

export class ProductCategoryModel {
  productCategoryKey: number;
  productCategoryName: string;
  productCategoryDescription: string;
  dimProductSubcategory: ProductSubCategoryModel[];
}
