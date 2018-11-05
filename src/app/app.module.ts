import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps/maps.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AgmCoreModule.forRoot(
      {
      apiKey: 'AIzaSyC01tRXSJ7cf5_GpsyBjtjaYa3Zl9GjNQ0',
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
