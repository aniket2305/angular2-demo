import { Component, OnInit } from '@angular/core';

export class Heros {
  
    constructor(
      public id: number,
      public name: string,
      public power: string,
      public alterEgo?: string
    ) {  }
  
  } 
@Component({
  selector: 'heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.css']
})
export class HeroesFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
  


  model = new Heros(18,'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  
    
  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

}
