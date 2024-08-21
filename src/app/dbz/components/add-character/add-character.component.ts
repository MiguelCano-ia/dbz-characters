import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {

  // Debemos usar el decorador Output para emitir eventos
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); // We must use the EventEmitter class to emit events

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {

    // debugger: We can use the debugger keyword to stop the execution of the code and inspect the current state of the application.
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character); // We must use the emit method to emit events
    this.character.name = '';
    this.character.power = 0;
  };
}
