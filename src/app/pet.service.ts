import { Injectable } from "@angular/core";
import { Pet } from "./pet";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class PetService {
  private petsURL = "api/pets";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  PETS: Pet[] = [
    { name: "Voltorb" },
    { name: "Pikachu" },
    { name: "Torchic" },
    { name: "Pidgey" },
    { name: "Charizard" }
  ];

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsURL).pipe(
      tap(_ => this.log("fetched pets")),
      catchError(this.handleError<Pet[]>("getPets", []))
    );
  }
}
