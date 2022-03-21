import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {
    path: 'reg', component: UserRegistrationComponent
  },
  {
    path: 'vehicles', component: VehiclesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
