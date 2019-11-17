import { Component, OnInit, Input } from '@angular/core';
import {RACE} from './../../StandingResponse';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-icon-component',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
  })
export class IconComponent implements OnInit {

    @Input()
    public race: RACE;

    public asset: string;

    constructor() {}

    ngOnInit() {
        switch (+this.race) {
            case RACE.PROTOSS:
                this.asset = ('../../../assets/icon-protoss.png');
                break;
            case RACE.TERRAN:
                this.asset = ('../../../assets/icon-terran.png');
                break;
            case RACE.ZERG:
                this.asset = ('../../../assets/icon-zerg.png');
                break;
            default:
                break;
        }
    }

}
