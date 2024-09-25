import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Medic } from '../Model/medic';

@Injectable({
  providedIn: 'root'
})
export class MedicService extends GenericService<Medic> {

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/medics`);
   }
}
