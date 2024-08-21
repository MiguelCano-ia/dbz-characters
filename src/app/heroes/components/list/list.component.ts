import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName = ['Superman', 'Ironman', 'Spiderman', 'Batman', 'Hulk'];
  public heroDeleted? = '';

  deleteHero(): void {
    this.heroDeleted = this.heroName.pop();
  }
}
