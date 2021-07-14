import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// интернализация даты - bug
// import { registerLocaleData } from '@angular/common';
// import localeRu from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import { cardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';

// интернализация даты - bug
// registerLocaleData (localeRu, localId:'ru')

@NgModule({
  declarations: [AppComponent, cardComponent, FormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
