import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ModalController, LoadingController, ToastController } from '@ionic/angular';

//native API
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { SetLocationPage } from '../set-location/set-location.page';
import { Location } from '../models/location';
import { Place } from '../models/place';

import { PlacesService } from '../services/places.services';

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
    private geoLocation:Geolocation,
    private toastCtrl:ToastController,
    private camera:Camera,
    private placesService:PlacesService,
    private router:Router
  ) { }

  ngOnInit() {
    this.location = new Location(40.7624324, -73.9759827);
  }

  private formSubmitted(form:NgForm):void{
    //console.log(form.value);
    this.placesService.addPlace(
      new Place(
        form.value['title'],
        form.value['description'],
        this.location,
        ''
      )
    );
    //console.log(this.placesService.getPlaces());
    this.router.navigate(['/home']);
  }

  private onLocate():void{
    const loading = this.loadingCtrl.create().then(
      (loadingComponent)=>{
        loadingComponent.present();
        this.geoLocation.getCurrentPosition().then((resp) => {        
          this.location=new Location(resp.coords.latitude, resp.coords.longitude);
          this.defaultLocation=false;
          loadingComponent.dismiss();
         }).catch((error) => {
           loadingComponent.dismiss();
           
           const toast = this.toastCtrl.create({
            message: 'There was a problem providing location',
            duration: 2000          
           }).then(
             (toastComponent)=>{
               toastComponent.present();
             }
           )
         });    
      }
    )

     
  }

  private onOpenMap():void{
    const modal = this.modalCtrl.create({
      component: SetLocationPage
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

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}
