import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListAwesomesComponent} from './list-awesomes/list-awesomes.component';
import {UpdateAwesomeComponent} from './update-awesome/update-awesome.component';
import {CreateAwesomeComponent} from './create-awesome/create-awesome.component';


const routes: Routes = [
  {
    path: 'awesomes', component: ListAwesomesComponent
  },
  {
    path: 'create-awesome', component: CreateAwesomeComponent
  },
  {
    path: 'update-awesome/:id', component: UpdateAwesomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
