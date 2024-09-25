import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../Model/patient';
import { NgFor } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css',
})
export class PatientComponent implements OnInit {
  patients: Patient[];
  dataSource: MatTableDataSource<Patient>;
  displayedColumns: string[] = ['idPatient', 'firstName', 'lastName', 'dni'];

  constructor(private patientServices: PatientService) {}

  // Este metodo se ejecuta despues del constructor y sirve para carga la pagina html
  ngOnInit(): void {
    this.patientServices.findAll().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}

