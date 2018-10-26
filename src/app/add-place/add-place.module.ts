import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';

//native API
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { AddPlacePage } from './add-place.page';
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8FPbWLlijfbzfyykp308MCZGsQ7Ge-tQ'
    }),
    RouterModule.forChild(routes)
  ],
  entryComponents:[
    SetLocationPage
  ],
  declarations: [
    AddPlacePage,
    SetLocationPage
  ],
  providers:[
    Geolocation,
    Camera
  ]
})
export class AddPlacePageModule {}
