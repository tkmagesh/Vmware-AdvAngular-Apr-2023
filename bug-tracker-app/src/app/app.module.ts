import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './bugs/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
