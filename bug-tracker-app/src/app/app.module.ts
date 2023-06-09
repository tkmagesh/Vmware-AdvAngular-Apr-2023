import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { FormsModule } from '@angular/forms';
import { ClosedCountPipe } from './bugs/pipes/closed-count.pipe';
import { BugStatsComponent } from './bugs/bug-stats/bug-stats.component';
import { BugEditComponent } from './bugs/bug-edit/bug-edit.component';
import { UtilsModule } from './utils/utils.module';
import { LOCAL_STORAGE } from './shared';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UtilsModule,
    HttpClientModule
  ],
  providers: [
    {provide : LOCAL_STORAGE, useValue : window.localStorage}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
