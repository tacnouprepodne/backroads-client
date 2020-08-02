import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../model/location.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const baseUrl="http://localhost:8080/api/location";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  findAll():Observable<Location[]>{
    return this.http.get<Array<Location>>(baseUrl)
    .pipe(map(response=>{
      let reVal=new Array<Location>();
      response.forEach(elem=>{reVal.push(new Location(elem))})
      return reVal;
      
    }))
  }
}
