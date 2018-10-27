import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { HomePage } from './home.page';
import { PlacePage } from '../place/place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8FPbWLlijfbzfyykp308MCZGsQ7Ge-tQ'
    }),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    PlacePage
  ],
  entryComponents: [
    PlacePage
  ]
})
export class HomePageModule {}
