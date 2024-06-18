import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complete } from '../Models/devs';

@Injectable({
  providedIn: 'root'
})
export class DevsService {

  constructor(private http:HttpClient) { }
getDevs(complete:string):Observable<Complete>{
  return this.http.get<Complete>(`https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json`)
}

}
