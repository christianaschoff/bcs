import { Component } from '@angular/core';

@Component({
    selector: 'app-points-component',
    templateUrl: './points.component.html',
    styleUrls: ['./points.component.scss']
  })
export class PointsComponent  {

points = [
    {place: '1st', points: '1,600'},
    {place: '2nd', points: '1,100'},
    {place: '3rd', points: '875'},
    {place: '4th', points: '775'},
    {place: '5th', points: '675'},
    {place: '6th', points: '575'},
    {place: '7th', points: '400'},
    {place: '8th', points: '300'},
    {place: '9th-16th', points: '175'},
    {place: '17th-24th', points: '100'}];

}
