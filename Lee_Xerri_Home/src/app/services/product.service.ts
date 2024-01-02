import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../dto/product.dto";
import { ProductAddUpdate } from "../dto/product-add-update.dto";

@Injectable()
export class ProductService {

    endpoint: string = "http://localhost:8080/api/product";

    httpHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private httpClient: HttpClient) {
        
    }

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.endpoint);
    }

    getProductById(id: number): Observable<Product> {
        return this.httpClient.get<Product>(this.endpoint + "/" + id);
    } 

    searchProductsByName(name: string): Observable<Product[]> {    
        let parameters: HttpParams = new HttpParams();
        parameters = parameters.append('name', name);

        return this.httpClient.get<Product[]>(this.endpoint, {params: parameters});
    }

    addProduct(productToAdd: ProductAddUpdate): Observable<Product> {
        return this.httpClient.post<Product>(this.endpoint, productToAdd, this.httpHeader);
    }

    updateProduct(id: number, productToUpdate: ProductAddUpdate): Observable<Product> {
        return this.httpClient.put<Product>(this.endpoint + "/" + id, productToUpdate, this.httpHeader);
    }

    deleteProduct(id: number): Observable<any> {
        return this.httpClient.delete(this.endpoint + "/" + id);
    }
}