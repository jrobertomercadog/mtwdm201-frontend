import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElemProductos } from 'src/app/models/models';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})

export class CardsComponent implements OnInit {
@Input() products: ElemProductos[];
@Input() category: string="";
@Output() onClickRedirect: EventEmitter<number>=new EventEmitter();

  constructor() { 

  }

  ngOnInit() {
  }

  redirect(precio: number){
    //
    this.onClickRedirect.emit(precio);
    
  }

}
