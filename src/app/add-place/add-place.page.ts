import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalController, LoadingController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { SetLocationPage } from '../set-location/set-location.page';
import { Location } from '../models/location';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {

  private location:Location;
  private defaultLocation:boolean = true;

  constructor(
    private modalCtrl:ModalController,
    private loadingCtrl:LoadingController,
    private geoLocation:Geolocation
  ) { }

  ngOnInit() {
    this.location = new Location(40.7624324, -73.9759827);
  }

  private formSubmitted(form:NgForm):void{
    console.log(form);
  }

  private onLocate():void{
    this.geoLocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      //console.log(resp);
      this.location=new Location(resp.coords.latitude, resp.coords.longitude);
      this.defaultLocation=false;
     }).catch((error) => {
       console.log('Error getting location', error);
     });     
  }

  private onOpenMap():void{
    const modal = this.modalCtrl.create({
      component: SetLocationPage,
      componentProps: { 'location': this.location }
    }).then(
      (modalDialog)=>{
        modalDialog.onDidDismiss().then(
          (modalResult:any)=>{
            if(modalResult){
              //može da bude i bez ovoga ako je zatvoren samo sa dismiss() pa mora provera             
              this.location=<Location>modalResult.data['locationInformation'];   
              this.defaultLocation = false;          
            }            
          }
        )
        modalDialog.present();
      }
    );        
  }

  private onTakePhoto():void{
    
  }
}
