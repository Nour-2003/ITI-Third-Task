import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.css'
})
export class MoviesDetailsComponent {
  movie!: any;
  id!: number;

  constructor(
    private movieServ: MoviesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.movieServ.getMovieById(this.id).subscribe((response) => {
      console.log(response);
      
      this.movie = response;
    });
  }
}
