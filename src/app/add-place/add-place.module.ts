import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

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
    RouterModule.forChild(routes)
  ],
  entryComponents:[
    SetLocationPage
  ],
  declarations: [
    AddPlacePage
  ]
})
export class AddPlacePageModule {}
