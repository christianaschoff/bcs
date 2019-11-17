import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs/internal/Observable';
import { StandingResponse } from '../../StandingResponse';

@Component({
    selector: 'app-standings-component',
    templateUrl: './standings.component.html',
    styleUrls: ['./standings.component.scss']
  })
export class StandingsComponent implements OnInit {

    standings$: Observable<StandingResponse[]>;
    constructor(private readonly apiService: ApiService) {
    }

    ngOnInit(): void {
        this.standings$ = this.apiService.getStandings();
      }
}
