import { Component, Input } from '@angular/core';

@Component({
  selector: 'flower-comp',
  templateUrl: './flower.component.html'
})
export class FlowerComponent{

  @Input() flower:{};
}