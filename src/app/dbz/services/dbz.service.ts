import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import {Character} from "../interfaces/character.interface";

// Decorador para inyectar servicios
@Injectable({
  providedIn: 'root' // This service will be available in the root of the application
})
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 10000 },
    { id: uuid(), name: 'Vegeta', power: 9500 },
    { id: uuid(), name: 'Trunks', power: 9000 },
    { id: uuid(), name: 'Gohan', power: 8500 },
    { id: uuid(), name: 'Piccolo', power: 8000 },
  ];

  addCharacter( character: Character ): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    };
    this.characters.unshift(newCharacter); // We must use the unshift method to add an element to the beginning of an array
  };

  /*onDeleteCharacter( index: number ): void {
    this.characters.splice(index, 1); // We must use the splice method to remove an element from an array
  };*/

  deleteCharacterById ( id: string ): void {
    this.characters = this.characters.filter( characterItem => characterItem.id !== id );
  };
}
