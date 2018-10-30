import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from "rxjs";
import { Storage } from '@ionic/storage';

@Injectable()
export class FirebaseActiveService{

    private _serverStatus:boolean = false;
    public serverStatusChanged:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

    constructor(
        private _httpClient:HttpClient,
        private _storage:Storage
    ){}

    public _checkStatus(){     
    }

    public setStorageValue(){
        this._storage.set('myName', 'Vladimir').then(
            (ok)=>{
                console.log('Everything is ok...', ok);
            }
        )
        .catch(
            (err)=>{
                console.log('Something bad happened...', err);
            }
        )
    }

    public getStorageValue(){
        this._storage.get('myName').then(
            (ok)=>{
                console.log(ok);
            }
        )
    }
}