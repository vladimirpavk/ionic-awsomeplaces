import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AddPlacePage } from './add-place.page';
import { SetLocationPageModule } from '../set-location/set-location.module';
import { SetLocationPage } from '../set-location/set-location.page';

const routes: Routes = [
  {
    path: '',
    component: AddPlacePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetLocationPageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8FPbWLlijfbzfyykp308MCZGsQ7Ge-tQ'
    }),
    RouterModule.forChild(routes)
  ],
  entryComponents:[
    SetLocationPage
  ],
  declarations: [
    AddPlacePage
  ],
  providers:[
    Geolocation
  ]
})
export class AddPlacePageModule {}
