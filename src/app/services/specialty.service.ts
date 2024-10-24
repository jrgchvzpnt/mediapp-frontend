import { Injectable } from '@angular/core';
import { Specialty } from '../Model/specialty';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService extends GenericService<Specialty>  {

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/specialties`);
  }
}