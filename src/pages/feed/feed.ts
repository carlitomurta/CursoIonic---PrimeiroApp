import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ],
})
export class FeedPage {

  public obj_feed = {
    titulo: "Carlito Murta",
    data: "20 de Novembro/2017",
    descricao: "Primeiro app ionic-angular criado por mim, seguindo curso de Iniciação Ionic pela Udemy",
    likes: "12 Likes",
    comments: "4 Comments",
    time_post: "11h ago"
  }

  public listMovies = new Array<any>();
    constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }


  ionViewDidLoad() {
    // this.movieProvider.getLastestMovies().subscribe(data => {
    //   const response = data as any;
    //   const objRetorno = JSON.parse(response._body);
    //   this.listMovies = objRetorno.results;
    //   console.log((data as any)._body);
    // },
    //   error => {
    //     console.log(error);
    //   });
  }




}
