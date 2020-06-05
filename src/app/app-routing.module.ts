import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './components/patient/patient.component';
import { MedicationComponent } from './components/medication/medication.component';


const routes: Routes = [
  { 
    path: "", 
    redirectTo:"patients", 
    pathMatch:"full" 
  },
  {
    path: 'medications',
    component: MedicationComponent
  },
  {
    path: 'patients',
    component: PatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
