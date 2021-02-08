import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MountainItemComponent } from './mountain-item/mountain-item.component';
import { MountainDetailComponent } from './mountain-detail/mountain-detail.component';
import { MountainService } from './shared/mountain.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { MountainEditComponent } from './mountain-edit/mountain-edit.component';
import { MountainData } from './shared/mountain-data';
import { HttpClientModule } from '@angular/common/http';
import { MountainNewComponent } from './mountain-new/mountain-new.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    MountainItemComponent,
    MountainDetailComponent,
    MountainEditComponent,
    MountainNewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MountainData)
  ],
  providers: [MountainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
