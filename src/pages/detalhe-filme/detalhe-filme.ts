import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhe-filme',
  templateUrl: 'detalhe-filme.html',
  providers: [MovieProvider]
})
export class DetalheFilmePage {
  public filme;
  public id;
  public loader;

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


  ionViewDidEnter() {
    this.mostrarLoading();
    this.id = this.navParams.get('id');
    this.movieProvider.getMovieDetails(this.id).subscribe(data => {
      let retorno = (data as any)._body;
      this.filme = JSON.parse(retorno);
      this.fecharLoading();
    }, error => {
      console.log(error);
      this.fecharLoading();
    })
  }
}
