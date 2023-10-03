import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PlacesToVisitComponent } from './pages/places-to-visit/places-to-visit.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { EventsComponent } from './pages/events/events.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DonateComponent } from './pages/donate/donate.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutUsComponent,
  },
  {
    path: "places-to-visit",
    component: PlacesToVisitComponent,
  },
  {
    path: "activities",
    component: ActivitiesComponent,
  },
  {
    path: "events",
    component: EventsComponent,
  },
  {
    path: "gallery",
    component: GalleryComponent,
  },
  {
    path: "donate",
    component: DonateComponent,
  },
  {
    path: "publications",
    component: PublicationsComponent,
  },
  {
    path: "contact-us",
    component: ContactUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
