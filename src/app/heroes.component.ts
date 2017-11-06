import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:['./heroes.component.css'],
  providers: [HeroService]
})



export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService,
                private router: Router) { 
    //this.heroes = this.heroService.getHeroes();

  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().then((heroes) => {this.heroes = heroes; console.log(heroes)});
  }
  
  onSelect(hero:Hero) :void{
    this.selectedHero = hero;
  }

  gotoDetail(): void{
        this.router.navigate(['/details', this.selectedHero.id]);
  }

}
