import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }
 //https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
  getAllVehicles():Observable<any>{
  return  this.http.get('https://catfact.ninja/breeds').pipe(map((res:any)=> {return {pageSize: res.per_page, data: res.data}})); 
  // By using map operator, we are transforming data which is coming from backend
  // Pipe method can be used to together multiple functions , most of the time we use this for observables data
  }

  saveVechicles(body:any){
    return this.http.post('url', body) // save / update / delete 
  }
}
