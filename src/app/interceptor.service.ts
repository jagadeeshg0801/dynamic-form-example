import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         // here req means, request/api url from UI with payload/empty
  // SHOW Spinnder
         console.log('request',req)

    

       const headers =new HttpHeaders({
         'Authorization': 'Bearer '+ 'ABC12121',
         'timeZone': location.origin
       });

      //  ** This is for excluding few API Calls starts
       const urls_notRequired: any = ['breeds', 'abc', 'getUserData'];
       const findEle =urls_notRequired.find((v:any) => req.url.includes(v)); // http://getBreeds
      //  ** This is for excluding few API Calls Ends


       console.log('findEle', findEle);

       const cloneReq = findEle? req.clone({headers}): req; // Based on findEle, to cloning headers or vice versa

       return next.handle(cloneReq).pipe(map((event: HttpEvent<any>) => { // Request Handling  & Response 
        if (event instanceof HttpResponse) {
          if (event.status === 401) { // Method Not allowed 
          }
          if(event.status == 200){ // Always Success
            alert('api success')
          }

          //HIDE Spinner

        }
        return event;
      }));
      
  }

  constructor() { }
}
