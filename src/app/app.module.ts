import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from "./dbz/dbz.module"

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ // We must import the modules that we want to use in this module
    BrowserModule,
    AppRoutingModule,
    CounterModule, // We must import the CounterModule to use the CounterComponent
    HeroesModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
