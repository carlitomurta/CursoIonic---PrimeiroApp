import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieProvider {

  constructor(public http: Http) {
  }
  baseAPIPath: string = "https://api.themoviedb.org/3";

  authKey: string = "api_key=e9144acc43dc154376d00dc7eac11572";

  language: string = "&language=pt-BR";

  getLastestMovies(page = 1) {
    return this.http.get(this.baseAPIPath + `/movie/popular?page=${page}&` + this.authKey + this.language);
  }

  getMovieDetails(filmeid) {
    return this.http.get(this.baseAPIPath + `/movie/${filmeid}?`+this.authKey + this.language);
  }

}
