import { Injectable } from '@angular/core';
import { Mollywoodmood } from '../model/mollywoodmood';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MollywoodmoodService {
   private baseurl1 = "http://localhost:8081/api/v1/mollywoodmooddata";
    constructor(private http:HttpClient){}
    onsubmit():Observable<Mollywoodmood[]> {
      return this.http.get<Mollywoodmood[]> (this.baseurl1);
    }
}
