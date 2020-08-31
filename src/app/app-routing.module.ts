import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  {path: 'index', component: IndexComponent},
  { path: 'product/detail', loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
