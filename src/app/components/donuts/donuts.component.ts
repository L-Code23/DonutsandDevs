import { Component } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';
import { Donuts } from '../../Models/donuts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {

constructor(private _donutsService:DonutsService){}
donutResult:Donuts = {} as Donuts
search:string = "Glazed";

ngOnInit(){
  this.callApi();
}

  callApi():void{
    this._donutsService.getDonuts(this.search).subscribe((respone:Donuts) => {
      console.log(respone);
      this.donutResult = respone;
    })
  }

}
