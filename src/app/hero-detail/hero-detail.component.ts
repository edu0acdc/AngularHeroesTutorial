import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "../hero";
import { Pet } from "../pet";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HeroService } from "../hero.service";
import { PetService } from "../pet.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  pets: Pet[];
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private petService: PetService
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => (this.pets = pets));
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  goBack() {
    this.location.back();
  }
  save() {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  compareFn(c1: Pet, c2: Pet): boolean {
    return c1 && c2 ? c1.name === c2.name : c1 === c2;
  }
}
