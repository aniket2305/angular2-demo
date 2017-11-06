import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero} from './hero';



@Component({
  selector: 'vote-taker',
  template:`
        <h2>Should mankind colonize the Universe?</h2>
        <h4 class="mb-3">Agree: <span class="badge badge-primary">{{agreed}}</span>, Disagree: <span class="badge badge-primary">{{disagreed}}</span></h4>
        <my-voter *ngFor="let voter of voters"
            [name]="voter.name"
            (onVoted)="onVoted($event, voter)">
        </my-voter>
  `,
  providers: [HeroService]

})



export class VoteTakerComponent{
    constructor(private heroService: HeroService){
        this.getVoters();
    }
    voters: Hero[];
    agreed = 0;
    disagreed = 0;


    getVoters(): void {
        this.heroService.getHeroes().then((voters) => this.voters = voters);
    }

    onVoted(agreed: string, voter) {
        console.log(voter);
        agreed == 'yes' ? this.agreed++ : this.disagreed++;
    }



}
