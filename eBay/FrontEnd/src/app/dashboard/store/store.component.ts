import { Component, OnInit } from '@angular/core';

// import { HttpModule, Response } from '@angular/http';
// import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

/* Services Modules */
// import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public ProductsList = [];

  // ProductsList: any;

  constructor(private http: HttpClient) {

    }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/product/getProducts').subscribe(res => {this.ProductsList = res.data;});
  }

}
