import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'power-booster-calc',
  templateUrl: './power-booster-calc.component.html',
  styleUrls: ['./power-booster-calc.component.css']
})
export class PowerBoosterCalcComponent implements OnInit {

  power = 2;
  factor = 1;

  ngOnInit() {

  }

}
