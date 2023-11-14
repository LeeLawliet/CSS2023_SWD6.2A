import { Component, OnInit } from '@angular/core';
import { Product } from '../dto/product.dto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  ngOnInit(): void {
    this.initialiseProducts();
  }

  title: string = "Product Management System";

  products: Product[] = [

  ];

  colour: string = "green";
  imageWidth: number = 40;
  imageMargin: number = 2;
  areImagesVisible: boolean = true;
  listFilter: string = '';

  getTitle(): string {
    return this.title;
  }

  toggleImages(): void {
    this.areImagesVisible = !this.areImagesVisible;
  }

  initialiseProducts(): void {
    this.products.push(
      new Product(
        1,
        "Leaf Rake",
        "GDN-0011",
        new Date("March 19, 2016"),
        "Leaf rake with 48-inch wooden handle.",
        19.95,
        3.2,
        "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"        
      ),
      new Product(
        2,
        "Garden Cart",
        "GDN-0023",
        new Date("March 18, 2016"),
        "15 gallon capacity rolling garden cart",
        32.99,
        4.2,
        "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      ),
      new Product(
        5,
        "Hammer",
        "TBX-0048",
        new Date("May 21, 2016"),
        "Curved claw steel hammer",
        8.9,
        4.8,
        "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
      ),
      new Product(
        8,
        "Saw",
        "TBX-0022",
        new Date("May 15, 2016"),
        "15-inch steel blade hand saw",
        11.55,
        3.7,
        "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
      ),
      new Product(
        10,
        "Video Game Controller",
        "GMG-0042",
        new Date("October 15, 2015"),
        "Standard two-button video game controller",
        35.95,
        4.6,
        "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
      )
    );
  }

}
