import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuModule } from 'primeng/contextmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PlacesToVisitComponent } from './pages/places-to-visit/places-to-visit.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { EventsComponent } from './pages/events/events.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DonateComponent } from './pages/donate/donate.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsBodyComponent } from './components/about-us-body/about-us-body.component';
import { ActivitiesBodyComponent } from './components/activities-body/activities-body.component';
import { ContactUsBodyComponent } from './components/contact-us-body/contact-us-body.component';
import { DonateBodyComponent } from './components/donate-body/donate-body.component';
import { EventsBodyComponent } from './components/events-body/events-body.component';
import { GalleryBodyComponent } from './components/gallery-body/gallery-body.component';
import { PlacesToVisitBodyComponent } from './components/places-to-visit-body/places-to-visit-body.component';
import { PublicationsBodyComponent } from './components/publications-body/publications-body.component';
import { MegaMenuModule } from 'primeng/megamenu';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HomeBodyComponent,
    AboutUsComponent,
    PlacesToVisitComponent,
    ActivitiesComponent,
    EventsComponent,
    GalleryComponent,
    DonateComponent,
    PublicationsComponent,
    ContactUsComponent,
    AboutUsBodyComponent,
    ActivitiesBodyComponent,
    ContactUsBodyComponent,
    DonateBodyComponent,
    EventsBodyComponent,
    GalleryBodyComponent,
    PlacesToVisitBodyComponent,
    PublicationsBodyComponent
  ],
  imports: [
    CommonModule,
    ContextMenuModule,
    BrowserAnimationsModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
