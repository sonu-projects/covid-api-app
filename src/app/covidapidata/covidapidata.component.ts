import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../services/covid-data.service';

@Component({
  selector: 'app-covidapidata',
  templateUrl: './covidapidata.component.html',
  styleUrls: ['./covidapidata.component.css']
})
export class CovidapidataComponent implements OnInit {
  users:any;
  constructor(private service : CovidDataService ) { }

  ngOnInit(): void 
  {
    let response = this.service.users();
    response.subscribe((data) => this.users = data);
  }

}
