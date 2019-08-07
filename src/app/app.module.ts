import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicationComponent } from './publication/publication.component';
import { PublicationService} from './service/publication.service';

import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DetailAutorComponent } from './detail-autor/detail-autor.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicationComponent,
    DetailAutorComponent,
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PublicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
