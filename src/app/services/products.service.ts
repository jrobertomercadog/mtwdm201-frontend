import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppProductos } from '../models/models';
import { Observable } from 'rxjs';

const URL_PRODUCTS='https://mtwdm.lilmonika.info/ws/products';
//const URL_PRODUCTS='http://localhost:5000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 

  }

  getAll(){
     return this.http.get(URL_PRODUCTS);
  }

  getCategory(category: string){
    return new Observable(observer=>{
      this.getAll().subscribe((data: AppProductos)=>{
        const filter=data.result.result.filter(item=>item.categoria==category || item.categoria.indexOf(category)>0)
        observer.next(filter);
      });
    });
  }

  getByCode(code: string){

    return new Observable (observer=>{
      this.getAll().subscribe((data: AppProductos)=>{
        const filter=data.result.result.filter(item=>item.codigo==code)
        observer.next(filter[0])
      });
    });
  }

  getSearch(buscar: string){

    return new Observable(observer=>{

      this.getAll().subscribe((data: AppProductos)=>{

        const filter=data.result.result.filter(item=>item.descripcion.toLowerCase().indexOf(buscar.toLowerCase())>=0)
        observer.next(filter)
      });

    });

  }
}
