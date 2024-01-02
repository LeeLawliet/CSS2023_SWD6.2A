import { Component, OnInit } from '@angular/core';
import { Product } from '../dto/product.dto';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}
  
  ngOnInit(): void {    
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: string =  params.get("id") as string;
      this.productService.getProductById(+id).subscribe((res: Product) => {
        this.product = res;
      })
    });
  }
}
