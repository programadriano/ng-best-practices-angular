import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './services/directives/highlight.directive';
import { SafePipe } from './services/pipes/safe.pipe';
import { HeaderComponent } from './components/header/header.component';
import { DataService } from './services/data-service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    SafePipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
