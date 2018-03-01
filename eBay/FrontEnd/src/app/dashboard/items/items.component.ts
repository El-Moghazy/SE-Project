import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ToasterService } from 'angular5-toaster';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent {

  myProducts: any;
  currentUser;

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
        // console.log(this.myProducts);

        this.myProducts = this.myProducts.filter((product) => {
          return product.sellerName == username
        });

        // console.log(this.myProducts);

      });


  }

  editProduct(productID) {

  }

  deleteProduct(productID) {

  }


  ngOnInit() {

   this.currentUser = JSON.parse(localStorage.getItem('currentUser'))

   this.getMyProducts();

  };


}
