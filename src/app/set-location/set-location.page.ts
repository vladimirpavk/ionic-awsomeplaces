import { Component, OnInit, Input } from '@angular/core';

import { Location } from '../models/location';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-set-location',
  templateUrl: './set-location.page.html',
  styleUrls: ['./set-location.page.scss'],
})
export class SetLocationPage implements OnInit {

  @Input() location:Location;
  private markerLocation:Location = null;

  constructor(
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {
  }

  private onMapClicked(event:any):void{
    this.markerLocation = new Location(event.coords.lat, event.coords.lng);
  }

  private onDismiss():void{
    this.modalCtrl.dismiss();
  }

  private onSetLocation():void{
    this.modalCtrl.dismiss({
      'locationInformation': this.markerLocation
    });
  }
}
