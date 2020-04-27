import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidePlanksComponent } from './Components/back-exercises/side-planks/side-planks.component';
import { McgillSitUpsComponent } from './Components/back-exercises/mcgill-sit-ups/mcgill-sit-ups.component';
import { BirdDogsComponent } from './Components/back-exercises/bird-dogs/bird-dogs.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './Components/home/home.component';
import { WallpaperComponent } from './Components/wallpaper/wallpaper.component';
import { JumbotronComponent } from './Components/jumbotron/jumbotron.component';
import { BirdDogModalComponent } from './Modals/bird-dog-modal/bird-dog-modal.component';
import { SitUpModalComponent } from './Modals/sit-up-modal/sit-up-modal.component';
import { SidePlanksModalComponent } from './Modals/side-planks-modal/side-planks-modal.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidePlanksComponent,
    McgillSitUpsComponent,
    BirdDogsComponent,
    NavbarComponent,
    HomeComponent,
    WallpaperComponent,
    JumbotronComponent,
    BirdDogModalComponent,
    SitUpModalComponent,
    SidePlanksModalComponent,
  ],
  entryComponents: [
    BirdDogModalComponent,
    SidePlanksModalComponent,
    SitUpModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
