import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DroneListComponent } from './drone-list/drone-list.component';
import { DroneDetailComponent } from './drone-detail/drone-detail.component';
import { AddDroneComponent } from './add-drone/add-drone.component';
import { UpdateDroneComponent } from './update-drone/update-drone.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'drones', component: DroneListComponent},
  {path: 'drones/add-drone', component: AddDroneComponent},
  {path: 'drones/update/:id', component: UpdateDroneComponent},
  {path: 'drones/:id', component: DroneDetailComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
