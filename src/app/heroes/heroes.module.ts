// Dependencias principales
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./components/list/list.component";
import { HeroComponent } from "./components/hero/hero.component";


@NgModule({
  declarations: [
    ListComponent,
    HeroComponent,
  ],
  exports: [
    ListComponent,
    HeroComponent,
  ],
  // Si vemos un error de modulos, es porque no importamos el CommonModule
  imports: [
    CommonModule // We must import the CommonModule to use the ngFor directive
  ],
})
export class HeroesModule {

}
