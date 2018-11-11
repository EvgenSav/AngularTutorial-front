import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes = () => {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  };
  addHero = (name: string) => {
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      if (hero) {
        this.heroes.push(hero)
      }
    });
  };
  delete = (hero: Hero) => {
    this.heroService.deleteHero(hero).subscribe(res => {
      if (res) {
        const remIdx = this.heroes.findIndex(h => h.id === hero.id);
        this.heroes.splice(remIdx, 1);
      }
    });
  };
}
