import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHome } from './Page/Home/Home.Page';
import { PageStatus } from './Page/Status/Status.Page';

const routes: Routes = [
  // { path: 'tag/:tag', component: PageProduct },
  // { path: 'product/:id', component: PageProduct },
  { path: 'status', component: PageStatus  , pathMatch: 'full'},
  { path: 'home', component: PageHome , pathMatch: 'full'},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageHome },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
