import { Injectable } from "@angular/core";
import { Pet } from "./pet";
@Injectable()
export class PetService {
  PETS: Pet[] = [
    { name: "Voltorb" },
    { name: "Pikachu" },
    { name: "Torchic" },
    { name: "Pidgey" },
    { name: "Charizard" }
  ];

  constructor() {}

  getPets() {
    return this.PETS;
  }
}
