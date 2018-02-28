import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
//ADDED (different selector)
@Component({
  selector: 'app-items',
  templateUrl: './items-component.html'
})
export class ItemsComponent {
  public itemsList = [];
  addClicked: boolean = false;
  productName: String = null;
  productPrice: Number = null;
  public itemsState = [];

  constructor(private http: Http, private httpClient: HttpClient) {

  }

  onSubmitNewProduct() {
    let newProduct = {
      sellerName: "GET AUTHENTICAION NAME",
      name: this.productName,
      price: this.productPrice
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    //TODO: Seperate in a service.
    this.http.post('http://localhost:3000/api/product/createProduct', newProduct, { headers: headers })
      .subscribe(res => { this.fetchItems(); });
    this.productName = null;
    this.productPrice = null;
    this.addClicked = false;
    //TODO: state
  }

  removeProduct(id) {
    this.http.delete('http://localhost:3000/api/product/deleteProduct/' + id)
      .subscribe(res => { this.fetchItems(); });
  }

  editProduct(j) {
    this.itemsState[j] = true;
    let i;
    for (i = 0; i < this.itemsList.length; i++) {
      if (i != j)
        this.itemsState[i] = false;
    }
  }

  updateProduct(id, i,name,price) {
    //TODO: Update product :)

    let updatedProduct = {
      name: name,
      price: price
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    //TODO: Seperate in a service.
    this.http.patch('http://localhost:3000/api/product/updateProduct/' + id, updatedProduct, { headers: headers })
      .subscribe(res => { this.fetchItems(); });
  }

  fetchItems() {
    //Bullshit code
    this.httpClient.get<any>('http://localhost:3000/api/product/getProducts').subscribe(
      res => {
        this.itemsList = res.data;
        let i;
        for (i = 0; i < this.itemsList.length; i++) {
          this.itemsState[i] = false;
        }

      });
  }

  ngOnInit() {
    this.fetchItems();
  }

}
