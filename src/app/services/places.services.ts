import { EventEmitter } from "@angular/core";

import { Subject } from "rxjs";

import { Place } from "../models/place";


export class PlacesService{
    
    //public places:Subject<Place[]> = new Subject<Place[]>();
    public places:EventEmitter<Place[]>=new EventEmitter<Place[]>();

    private _places:Place[] = [];

    public getPlaces():Place[]{
        return this._places.slice();
    }

    public addPlace(place:Place):void{
        this._places.push(place);
        //this.places.next(this._places);
        this.places.emit(this.getPlaces());
    }

    public removePlace(place:Place):void{
        this._places.splice(this._places.indexOf(place), 1);
        //this.places.next(this._places);
        this.places.emit(this.getPlaces());
    }
}