import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../service/http.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  /* ebbe a kezdetben ures tombe toltom be a lekerdezett listat */
  movies: Movie[] = [];
  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([])

  constructor(
    private http: HttpService,
  ) { }

  ngOnInit(): void {
    /* Ha az oldal betoltesekor mar meg akarom jeleniten a listat:
    return this.http.getMovieList()
      .subscribe(arg => this.movies = arg);
       */
  }
  
  getMovies(): Observable<Movie[]> {
  return this.http.getMovieList()
      .subscribe(arg => this.movies = arg);
}

  deleteMovie(id: number): any {
    return this.http.deleteMovie(id)
    .subscribe( () => this.getMovies());
    
  }
  
}
