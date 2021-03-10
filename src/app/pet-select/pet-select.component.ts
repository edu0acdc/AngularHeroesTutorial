import { Component, OnInit } from "@angular/core";
import { PetService } from "../pet.service";
@Component({
  selector: "app-pet-select",
  templateUrl: "./pet-select.component.html",
  styleUrls: ["./pet-select.component.css"]
})
export class PetSelectComponent implements OnInit {
  pets = [];
  constructor(private petService: PetService) {}

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    this.pets = this.petService.getPets();
  }
}
