import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

import { filter, map } from "rxjs/operators";
import { AuthenticationService } from "src/app/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {


  breadcrumb: any=""
  constructor(private router: Router, private authenticationService: AuthenticationService) { 
    this.getBreadcrumb().subscribe(event=>{

      this.breadcrumb=event
    });

  }

  ngOnInit() {
  }

  search(criterio: string){

    this.router.navigate(['/search', criterio]);
    
  }

  getBreadcrumb(){

    return this.router.events.pipe(
      filter(event=>event instanceof ActivationEnd),
      map((event: ActivationEnd)=> event.snapshot.data)
    )
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
