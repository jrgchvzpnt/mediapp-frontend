import { Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { MedicComponent } from './medic/medic.component';

export const pageRoutes: Routes = [
  { path: 'patient', component: PatientComponent },
  { path: 'medic', component: MedicComponent },
];
