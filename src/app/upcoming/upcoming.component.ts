import { NgFor } from '@angular/common';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subscription } from 'rxjs';

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
  selector: 'app-upcoming',
  standalone: true,
  imports: [FloorPipe,NgFor,RouterModule],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css'
})
export class UpcomingComponent {
  constructor(private Movieserv: MoviesService) {
    this.currentPage = new BehaviorSubject<number>(1);
  }
  subscription!: Subscription;
  currentPage!: BehaviorSubject<number>;
  page!: number;
  totalPages!: number;

  Upcominglist: any[] = [];
  ngOnInit() {
    this.currentPage.subscribe((newPage) => {
      this.subscription = this.Movieserv.getUpcoming(newPage).subscribe(
        (response) => {
          // console.log(response);
          this.Upcominglist = response.results;
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
