import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../services/places.services';
import { Place } from '../models/place';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { PlacePage } from '../place/place.page';
import { FirebaseActiveService } from '../services/firebase-active.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  private _places:Place[] = [];  
  private _subs:Subscription;

  constructor(
    private modalCtrl:ModalController,
    private placesService:PlacesService,
    private firebaseActiveService:FirebaseActiveService
  ){}

  ngOnInit(){
    this._subs = this.placesService.places.subscribe(
      (plcs:Place[])=>
      this._places = plcs
    );
  }

  ngOnDestroy(){
    this._subs.unsubscribe();
  }

  private onPlaceClicked(place:Place):void{
    //console.log(place);
    const modal = this.modalCtrl.create({
      component:PlacePage,
      componentProps: {
        'place': place
      }
    }).then(
      (modalDialog)=>{
        modalDialog.present();
      }
    )
  }

  private check():void{
    this.firebaseActiveService.setStorageValue();
  }

  private check2(){
    console.log(this.firebaseActiveService.getStorageValue());
  }

}
