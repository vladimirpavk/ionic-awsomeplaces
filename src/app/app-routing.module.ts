import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'place', loadChildren: './place/place.module#PlacePageModule' },
  { path: 'add-place', loadChildren: './add-place/add-place.module#AddPlacePageModule' },
  { path: 'set-location', loadChildren: './set-location/set-location.module#SetLocationPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
