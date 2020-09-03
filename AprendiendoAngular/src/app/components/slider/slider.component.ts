import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


  // por medio de @input, recojo una propiedad enviada desde otro elemento
  @Input() nombre: string;
  @Input() size: string;

  constructor() { }

  ngOnInit(): void {
  }

}
