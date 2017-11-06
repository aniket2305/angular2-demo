import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-details.component';
import { VoteTakerComponent }  from './votetaker.component';
import { PowerBoosterCalcComponent} from './power-booster-calc/power-booster-calc.component';
import { HeroesFormComponent } from './heroes-form/heroes-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'details/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'voting', component: VoteTakerComponent},
  { path:'calculator', component: PowerBoosterCalcComponent},
  { path:'form', component: HeroesFormComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
