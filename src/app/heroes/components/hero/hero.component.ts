import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html', // Considerado como fuera de la clase, pondria problema con atributos private.
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name = 'ironMan';
  public age = 45;

  // Los get, se usan como propiedades, pero se ejecutan como funciones.
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spider man';
  }

  changeAge(): void {
    this.age = 20;
  }

  resetForm(): void {
    this.name = 'ironMan';
    this.age = 45;
  }
}
