import { Component, OnInit } from "@angular/core";
import { PetService } from "../pet.service";
import { Pet } from "../pet";
@Component({
  selector: "app-pets",
  templateUrl: "./pets.component.html",
  styleUrls: ["./pets.component.css"]
})
export class PetsComponent implements OnInit {
  pets: Pet[];
  constructor(private petService: PetService) {}

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => (this.pets = pets));
  }
}
