import { Place } from "../models/place";

export class PlacesService{
    private _places:Place[] = [];

    public getPlaces():Place[]{
        return this._places.slice();
    }

    public addPlace(place:Place):void{
        this._places.push(place);
    }

    public removePlace(place:Place):void{
        this._places.splice(this._places.indexOf(place), 1);
    }
}