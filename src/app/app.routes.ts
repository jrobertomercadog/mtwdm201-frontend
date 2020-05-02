//Imports Angular

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Imports Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/products/categories/categories.component';
import { SearchComponent } from './pages/search/search.component';

import {AuthGuard} from './helpers/auth.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data:{title: 'Welcome', icon: 'fa-automobile'} },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard], data:{title: 'About', icon: 'fa-briefcase'}  },
    { path: 'products', 
      component: ProductsComponent, canActivate: [AuthGuard], 
      children:[
        { path: 'categories/:category', component: CategoriesComponent},
        { path: '', redirectTo:'categories/Cars', pathMatch:'full'},
        { path: '**', redirectTo:'categories/Cars', pathMatch:'full' }
      ],
      data:{title: 'Vehicles', icon: 'fa-dashboard'} 
    },
    { path: 'product/:code/:category', component: ProductComponent, canActivate: [AuthGuard] },
    { path: 'search/:criterio', component: SearchComponent, canActivate: [AuthGuard]},
    { path: '', component: HomeComponent, canActivate: [AuthGuard], data:{title: 'Welcome', icon: 'fa-automobile'}},
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
