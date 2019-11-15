import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { CreateTailieuComponent } from './tailieu12/Video/create-tailieu/create-tailieu.component';
import { TailieuDetailsComponent } from './tailieu12/Video/tailieu-details/tailieu-details.component';
import { TailieuListComponent } from './tailieu12/Video/tailieu-list/tailieu-list.component';


// import { EmbedVideo } from 'ngx-embed-video';

// import { EmbeddedMediaModule } from 'ngx-embedded-media';
// import { NgxResponsiveEmbedComponent } from 'ngx-responsive-embed';

import { SafePipeModule } from 'safe-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import { GiaotrinhDetailsComponent } from './tailieu12/giaotrinh/giaotrinh-details/giaotrinh-details.component';
import { GiaotrinhListComponent } from './tailieu12/giaotrinh/giaotrinh-list/giaotrinh-list.component';





/* Angular material */
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './tailieu12/angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { CHDETAILSComponent } from './CH-CTL/CH/ch-details/ch-details.component';
import { CHLISTComponent } from './CH-CTL/CH/ch-list/ch-list.component';
import { CTLLISTComponent } from './CH-CTL/CTL/ctl-list/ctl-list.component';
import { CTLDETAILSComponent } from './CH-CTL/CTL/ctl-details/ctl-details.component';


import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
// import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateTailieuComponent,
    TailieuDetailsComponent,
    TailieuListComponent,
    GiaotrinhDetailsComponent,
    GiaotrinhListComponent,
    CHDETAILSComponent,
    CHLISTComponent,
    CTLLISTComponent,
    CTLDETAILSComponent,
    // AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    // HttpClientModule, EmbedVideo.forRoot(),
    SafePipeModule,

    // EmbeddedMediaModule.forRoot(),
    // NgxResponsiveEmbedComponent,

    BrowserAnimationsModule,
    AngularMaterialModule,
    MatVideoModule,
    NgxPaginationModule,
    
 

    // JwPaginationComponent

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
