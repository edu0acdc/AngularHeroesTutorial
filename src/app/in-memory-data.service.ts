import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Dr Nice", pet: { name: "Voltorb" } },
      { id: 12, name: "Narco", pet: { name: "Voltorb" } },
      { id: 13, name: "Bombasto", pet: { name: "Pikachu" } },
      { id: 14, name: "Celeritas", pet: { name: "Torchic" } },
      { id: 15, name: "Magneta", pet: { name: "Torchic" } },
      { id: 16, name: "RubberMan", pet: { name: "Charizard" } },
      { id: 17, name: "Dynama", pet: { name: "Charizard" } },
      { id: 18, name: "Dr IQ", pet: { name: "Pikachu" } },
      { id: 19, name: "Magma", pet: { name: "Pidgey" } },
      { id: 20, name: "Tornado", pet: { name: "Pidgey" } }
    ];
    const pets = [
      { name: "Voltorb" },
      { name: "Pikachu" },
      { name: "Torchic" },
      { name: "Pidgey" },
      { name: "Charizard" }
    ];

    return { heroes, pets };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
