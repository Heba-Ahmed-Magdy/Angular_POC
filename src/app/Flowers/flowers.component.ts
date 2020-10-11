import { Component } from '@angular/core';
import { FlowerService } from '../Services/Flower.Service';
@Component({
  templateUrl: './flowers.component.html'
})
export class FlowersComponent{

    flowers;
    constructor(private flowerService:FlowerService){}
    ngOnInit(){
       this.flowerService.getAll().subscribe(data=>{this.flowers=data;});
    }
}