import { Component } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from 'angular5-toaster';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent {

  myProducts: any;
  productName;  productPrice; currentUser;
  newOrEdit = false;  createNew = false;  editPressed = false;

  constructor(
    private http: Http,
    private toaster: ToasterService,
    private router: Router,
    private httpClient: HttpClient,
  ) {

  }

  getMyProducts() {

    var username = this.currentUser.user.username;

    this.httpClient.get('http://localhost:3000/api/product/getProducts')
      .subscribe((res: any) => {
        this.myProducts = res.data;
        this.myProducts = this.myProducts.filter((product) => {
          return product.sellerName == username
        });
      });


  }

  newProduct() {
    let newProduct = {
      name: this.productName,
      price: Number(this.productPrice),
      sellerName: this.currentUser.user.username
    };

    this.http.post('http://localhost:3000/api/product/createProduct', newProduct)
        .catch(err => {
            this.toaster.pop({
              type: 'error',
              title: "Error!",
              body: "name(String) and price(Number) are required fields.",
              timeout: 3000
            });
            return Observable.throw(err)
        })
        .subscribe(res => {
          this.toaster.pop({
            type: 'success',
            title: "Success!",
            body: "You've been successfully created New Product!",
            timeout: 3000
          });
          this.getMyProducts();
          this.newOrEdit = false;
          this.createNew = false;
        })
        ;
  }

  editProduct(productID) {

  }

  deleteProduct(productID) {
    this.http.delete('http://localhost:3000/api/product/deleteProduct/' + productID)
      .subscribe(res => {
        this.toaster.pop({
          type: 'error',
          title: "Deleted!",
          body: "You've been successfully deleted the Product!",
          timeout: 3000
        });
        this.getMyProducts();
    });
  }


  ngOnInit() {

   this.currentUser = JSON.parse(localStorage.getItem('currentUser'))

   this.getMyProducts();

  };


}
