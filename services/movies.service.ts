import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  Popular: any[] = [];
  Top_Rated: any[] = [];
  Upcoming: any[] = [];

  getPopular(pageNumber: number = 1): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/popular?api_key=f5aa37718545ca90afc97b445ad6339a&page=${pageNumber}`
    );
  }
  getTopRated(pageNumber: number = 1): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=f5aa37718545ca90afc97b445ad6339a&page=${pageNumber}`
    );
  }
  getUpcoming(pageNumber: number = 1): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=f5aa37718545ca90afc97b445ad6339a&page=${pageNumber}`
    );
  }
  getMovieById(id: number): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f5aa37718545ca90afc97b445ad6339a`
    );
  }
}
