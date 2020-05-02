import { Component, OnInit, OnDestroy } from '@angular/core';

import { ElemProductos } from 'src/app/models/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit, OnDestroy {

  misdatos: ElemProductos []=[];
  
  
  constructor(private productsServ: ProductsService) {     
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
