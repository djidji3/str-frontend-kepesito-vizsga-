import { Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/movies';

  constructor(
  private  htttp: HttpClient,
  ) { }

  getMovieList():any {
    return this.htttp.get<Movie[]>(this.BASE_URL) 
 }

  deleteMovie(id):any {
    return this.htttp.delete<Movie>(`${this.BASE_URL}/${id}`)
/*     .subscribe(frissAdat => this.getMovieList()) */
  }
}
