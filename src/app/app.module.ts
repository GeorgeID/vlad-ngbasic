import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { cardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, cardComponent, FormComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
