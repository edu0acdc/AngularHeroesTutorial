import { Component, OnInit } from "@angular/core";
import { PetService } from "../pet.service";
@Component({
  selector: "app-pets",
  templateUrl: "./pets.component.html",
  styleUrls: ["./pets.component.css"]
})
export class PetsComponent implements OnInit {
  pets = [];
  constructor(private petService: PetService) {}

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    this.pets = this.petService.getPets();
  }
}
