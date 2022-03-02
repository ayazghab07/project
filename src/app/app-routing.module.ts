import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './presentation/presentation.component';
import { EquipementComponent } from './equipement//equipement.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { AjoutComponent } from './ajout/ajout.component';
import { HommeComponent } from './homme/homme.component';
import { Jeans2Component } from './jeans2/jeans2.component';
import { Jeans1Component } from './jeans1/jeans1.component';
import { Jeans3Component } from './jeans3/jeans3.component';
const routes: Routes = [
  { path: 'home', component: PresentationComponent },
  {path:'listemployee' ,component:EmployeeComponent},
  {path:'listequipement' ,component:EquipementComponent},
  {path:'update_employee/:id' ,component:UpdateComponentComponent},
  {path:'ajouteremp',component:AjoutComponent},
  {path: 'homme', component: HommeComponent },
  {path: 'jeans2', component: Jeans2Component},
  {path: 'jeans1', component: Jeans1Component},
  {path: 'jeans3', component: Jeans3Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
