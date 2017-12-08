import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheFilmePage } from './detalhe-filme';

@NgModule({
  declarations: [
    DetalheFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheFilmePage),
  ],
})
export class DetalheFilmePageModule {}
