import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [ // We must declare the components that we want to use in this module
    CounterComponent,
  ],
  exports: [ // We must export the components that we want to use outside of this module
    CounterComponent
  ],
})
export class CounterModule {

}
