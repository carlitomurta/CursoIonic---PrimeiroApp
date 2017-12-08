import { DetalheFilmePage } from './../detalhe-filme/detalhe-filme';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

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

  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;

  public listMovies = new Array<any>();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
  }

  mostrarLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }

  fecharLoading() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  carregarFilmes(newpage: boolean = false) {
    this.mostrarLoading();
    this.movieProvider.getLastestMovies(this.page).subscribe(data => {
      const response = data as any;
      const objRetorno = JSON.parse(response._body);

      if (newpage) {
        this.listMovies = this.listMovies.concat(objRetorno.results);
        console.log(this.page);
        this.infiniteScroll.complete();
      } else { this.listMovies = objRetorno.results; }

      this.fecharLoading();

      if (this.isRefreshing) {
        this.refresher.complete();
        this.isRefreshing = false;
      }
    },
      error => {
        this.fecharLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      });
  }

  abrirDetalhes(filme) {
    this.navCtrl.push(DetalheFilmePage, { id: filme.id });
  }

  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.page++;
    this.carregarFilmes(true);
    infiniteScroll.complete();
  }
}
