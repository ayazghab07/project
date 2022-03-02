import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { EquipementComponent } from './equipement/equipement.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { AjoutComponent } from './ajout/ajout.component';
import { HommeComponent } from './homme/homme.component';
import { Jeans1Component } from './jeans1/jeans1.component';
import { Jeans2Component } from './jeans2/jeans2.component';
import { Jeans3Component } from './jeans3/jeans3.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    FooterComponent,
    EmployeeComponent,
    EquipementComponent,
    UpdateComponentComponent,
    AjoutComponent,
    HommeComponent,
    Jeans1Component,
    Jeans2Component,
    Jeans3Component
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
