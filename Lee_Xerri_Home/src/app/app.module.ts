import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DroneListComponent } from './drone-list/drone-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DroneService } from './services/drone.service';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { DroneDetailComponent } from './drone-detail/drone-detail.component';
import { AddDroneComponent } from './add-drone/add-drone.component';
import { UpdateDroneComponent } from './update-drone/update-drone.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DroneListComponent,
    DroneDetailComponent,
    AddDroneComponent,
    UpdateDroneComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DroneService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
