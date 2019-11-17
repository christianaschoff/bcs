import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import {StandingsComponent} from './components/standings/standings.component';
import {IconComponent} from './components/icons/icon.component';
import { PointsComponent } from './components/points/points.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import {MediaComponent } from './components/media/media.component';
import {ScheduleComponent } from './components/schedule/schedule.component';

const appRoutes: Routes = [
  {path: 'standings', component: StandingsComponent},
  {path: 'rules', component: PointsComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'media', component: MediaComponent},
  {path: '**', component: StandingsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    IconComponent,
    PointsComponent,
    MediaComponent,
    ScheduleComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [ApiService],
  exports: [
    StandingsComponent,
    IconComponent,
    PointsComponent,
    MediaComponent,
    ScheduleComponent,
    HeaderComponent,
    FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
