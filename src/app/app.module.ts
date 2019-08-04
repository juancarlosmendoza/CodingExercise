import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicationComponent } from './publication/publication.component';
import { PublicationService} from './service/publication.service';

import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PublicationComponent
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    HttpClientModule
  ],
  providers: [PublicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
