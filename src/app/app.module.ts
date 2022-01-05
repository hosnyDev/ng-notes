import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent], // component should be work with this module
  imports: [BrowserModule, AppRoutingModule, NgbModule], // all module will be work with this module
  providers: [], // all services
  bootstrap: [AppComponent], // first component should be open
})
export class AppModule {}
