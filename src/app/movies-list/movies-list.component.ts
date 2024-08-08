import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { MoviesService } from "../../../services/movies.service";
import { NgFor } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Subscription } from "rxjs/internal/Subscription";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Pipe({
  name: "floor",
  standalone: true, // Marking the pipe as standalone
})
export class FloorPipe implements PipeTransform {
  transform(value: number): number {
    return Math.floor(value);
  }
}

@Component({
  selector: "app-movies-list",
  standalone: true,
  imports: [NgFor, FloorPipe, RouterModule],
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.css"], // Corrected the property name to styleUrls
})
export class MoviesListComponent implements OnInit {
  constructor(private Movieserv: MoviesService) {
    this.currentPage = new BehaviorSubject<number>(1);
  }
  subscription!: Subscription;
  currentPage!: BehaviorSubject<number>;
  page!: number;
  totalPages!: number;
  Popularlist: any[] = [];
  Top_Ratedlist: any[] = [];
  Upcominglist: any[] = [];
  ngOnInit() {
    this.currentPage.subscribe((newPage) => {
      this.subscription = this.Movieserv.getPopular(newPage).subscribe(
        (response) => {
          // console.log(response);
          this.Popularlist = response.results;
          this.page = response.page;
          this.totalPages = response.total_pages;
        }
      );
    });
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.currentPage.next(++this.page);
    }
  }
  prevPage() {
    if (this.page > 1) {
      this.currentPage.next(--this.page);
    }
  }
  displayId(id: number) {
    this.Movieserv.getMovieById(id).subscribe((data) => {
      console.log(data);
    });
  }
}
