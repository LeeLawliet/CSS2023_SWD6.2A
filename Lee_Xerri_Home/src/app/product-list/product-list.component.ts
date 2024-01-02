import { Component, OnInit } from '@angular/core';
import { Product } from '../dto/product.dto';
import { ProductService } from '../services/product.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  constructor(private productService: ProductService) {

  }
  
  ngOnInit(): void {
    this.initialiseProducts();
  }

  title: string = "Product Management System";
  eventMessage: string = "";
  products: Product[] = [];

  colour: string = "green";
  imageWidth: number = 40;
  imageMargin: number = 2;
  areImagesVisible: boolean = true;
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(filterValue: string) {
    this._listFilter = filterValue;
    this.productService.searchProductsByName(filterValue).subscribe((res: Product[]) => {
      this.products = res;
    });
  }

  getTitle(): string {
    return this.title;
  }

  toggleImages(): void {
    this.areImagesVisible = !this.areImagesVisible;
  }

  initialiseProducts(): void {
    this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
    });
  }

  onNotify(message: string) {
    console.log(message);
    this.eventMessage = message;
  }

}
