import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {

  private url = 'http://www.poznan.pl/mim/plan/map_service.html?mtype=pub_transport&co=stacje_rowerowe';
  
  stations: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(data => (this.stations = data))
  }
}
