import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { IonicModule } from '@ionic/angular';

import { SetLocationPage } from './set-location.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //import agmcoremodule with apikey
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8FPbWLlijfbzfyykp308MCZGsQ7Ge-tQ'
    })
  ],
  declarations: [SetLocationPage]
})
export class SetLocationPageModule {}
