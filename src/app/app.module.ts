import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { TextCtrlComponent } from './component/text-ctrl/text-ctrl.component';
import { RadioCtrlComponent } from './component/radio-ctrl/radio-ctrl.component';
import { CheckBoxCtrlComponent } from './component/check-box-ctrl/check-box-ctrl.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    TextCtrlComponent,
    RadioCtrlComponent,
    CheckBoxCtrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }