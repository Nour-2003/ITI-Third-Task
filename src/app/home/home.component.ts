import { Component } from "@angular/core";
import { MoviesService } from "../../../services/movies.service";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [NgFor],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  constructor(private Movieserv: MoviesService) {}
  Popularlist: any[] = [];
  Top_Ratedlist: any[] = [];
  Upcominglist: any[] = [];
  ngOnInit() {
    this.Movieserv.getPopular().subscribe((data) => {
      this.Popularlist = data.results;
      console.log(this.Popularlist);
    });
    this.Movieserv.getTopRated().subscribe((data) => {
      this.Top_Ratedlist = data.results;
      console.log(this.Top_Ratedlist);
    });
    this.Movieserv.getUpcoming().subscribe((data) => {
      this.Upcominglist = data.results;
      console.log(this.Upcominglist);
    });
  }
}
