import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Destination } from '../model/destination.model';
import { ListSearchDest } from '../model/listDestPagNum.model';
import { Photos } from '../model/photos.model';

const baseUrl="http://localhost:8080/api/destination";
@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private http:HttpClient) { }

  findAll(params):Observable<ListSearchDest>{
    const headers = new HttpHeaders();
    return this.http.get(`${baseUrl}?pageNum=${params.pageNum}&pageSize=${params.pageSize}&sortLocation=${params.sortLocation}&sortSeason=${params.sortSeason}&order_by=${params.order_by}`,{headers:headers,observe:'response'})
    .pipe(map(response=>{
      return new ListSearchDest(response);
    }))
  }
  getById(id:number):Observable<Destination>{
    return this.http.get(`${baseUrl}/${id}`).pipe(map(res=>{
      return new Destination(res);}))
  }
  findPhotos():Observable<Photos[]>{
    return this.http.get<Array<Photos>>(`${baseUrl}/photos`)
    .pipe(map(response=>{
      
      let retVal=new Array<Photos>();
      response.forEach(elem=>{retVal.push(new Photos(elem))})      
      return retVal;
    }))
  }
}
