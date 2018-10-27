import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../models/place';
import { ModalController } from '@ionic/angular';
import { PlacesService } from '../services/places.services';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {
  
  @Input() place:Place;

  constructor(
    private modalCtrl:ModalController,
    private placesService:PlacesService
  ) { }

  ngOnInit() {
    console.log(this.place);
  }

  private onDeleteClicked():void{
    this.placesService.removePlace(this.place);
    this.modalCtrl.dismiss();
  }

  private onCloseClicked():void{
    this.modalCtrl.dismiss();
  }

}
