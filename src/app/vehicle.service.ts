import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'jquery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }
 //https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
  getAllVehicles(){
  return  this.http.get('http://universities.hipolabs.com/search?country=United+Kingdom'); // retreiving data
  }

  saveVechicles(body:any){
    return this.http.post('url', body) // save / update / delete
  }
}
