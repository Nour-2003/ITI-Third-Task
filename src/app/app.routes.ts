import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactComponent } from "./contact/contact.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MoviesDetailsComponent } from "./movies-details/movies-details.component";
import { TopratedComponent } from "./toprated/toprated.component";
import { UpcomingComponent } from "./upcoming/upcoming.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "movies", component: MoviesListComponent },
  { path: "topRated", component: TopratedComponent },
  { path: "upComing", component: UpcomingComponent },
  { path: "details/:id", component: MoviesDetailsComponent },
  { path: "about", component: AboutusComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: PageNotFoundComponent },
];
