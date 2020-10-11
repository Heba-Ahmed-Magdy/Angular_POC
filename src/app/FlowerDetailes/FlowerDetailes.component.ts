import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowerService } from '../Services/Flower.Service';

@Component({
  selector: 'app-flower.detailes',
  templateUrl: './FlowerDetailes.component.html',
  styleUrls: ['./FlowerDetailes.component.css']
})
export class FlowerDetailesComponent implements OnInit {

  flower;
  constructor(private flowerService:FlowerService,private route:ActivatedRoute) { }

  ngOnInit() {
    //params {'id':1,'name':'hhh'} 
    this.route.params.forEach(params=>{ 
      if(params['id']){
        this.flowerService.get(+params['id']).subscribe(data =>{
          this.flower=data;
          console.log(this.flower)
        });
      }
    });
  }

}
