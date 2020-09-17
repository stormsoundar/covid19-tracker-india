import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictDataComponent } from './state-data/district-data/district-data.component';
import { StateDataComponent } from './state-data/state-data.component';


const routes: Routes = [
  {
    path:'', component: StateDataComponent, children: [
      {
        path:'district-data', component: DistrictDataComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
