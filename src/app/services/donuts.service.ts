import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donuts } from '../Models/donuts';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  constructor(private http:HttpClient) { }
getDonuts(donuts:string):Observable<Donuts>{
  return this.http.get<Donuts>(`https://grandcircusco.github.io/demo-apis/donuts.json`)
}

}
