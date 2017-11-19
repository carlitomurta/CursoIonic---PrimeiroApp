import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieProvider {

  constructor(public http: Http) {
  }
  baseAPIPath: string = "https://api.themoviedb.org/3";

  authKey: string = "?api_key=e9144acc43dc154376d00dc7eac11572";

  language: string = "&language=pt-BR";

  getLastestMovies() {
    return this.http.get(this.baseAPIPath + '/movie/popular' + this.authKey + this.language);
  }

}
