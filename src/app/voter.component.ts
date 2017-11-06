import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'my-voter',
  template:`
      <div class="row">
        <h4 class="col-md-3">{{name}} </h4>
        <div class="col-md-9 mb-2">
        <button (click)="vote('yes')" [disabled]="voted" type="button" class="btn btn-outline-success">Agree</button>
        <button (click)="vote('no')" [disabled]="voted" type="button" class="btn btn-outline-danger">Disagree</button>
        </div>
      </div>
  `

})



export class VoterComponent implements OnInit {

  ngOnInit(): void{

  }
 
  @Input() name:string;
  @Output() onVoted = new EventEmitter<string>();
  voted = false;

  vote(agreed:string){
    this.onVoted.emit(agreed);
    this.voted = true;
  }

}
