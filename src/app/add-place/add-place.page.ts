import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { SetLocationPage } from '../set-location/set-location.page';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {

  constructor(
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {
  }

  private formSubmitted(form:NgForm):void{
    console.log(form);
  }

  private onLocate():void{

  }

  private onOpenMap():void{
    const modal = this.modalCtrl.create({
      component: SetLocationPage
    }).then(
      (modalDialog)=>{
        modalDialog.present();
      }
    )
  }

  private onTakePhoto():void{
    
  }

}
