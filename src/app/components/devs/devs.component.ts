import { Component } from '@angular/core';
import { DevsService } from '../../services/devs.service';
import { Complete } from '../../Models/devs';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-devs',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './devs.component.html',
  styleUrl: './devs.component.css'
})
export class DevsComponent {

  constructor(private _devsService:DevsService){}
  devsResult:Complete = {} as Complete;
  devSearch:string = "Blaise";

  ngOnInit(){
    this.callApi();
  }
  
    callApi():void{
      this._devsService.getDevs(this.devSearch).subscribe((respone:Complete) => {
        console.log(respone);
        this.devsResult = respone;
      })
    }



}
