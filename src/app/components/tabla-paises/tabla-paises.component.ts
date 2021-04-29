import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryServiceService } from 'src/app/services/country-service.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() selectedCountry: EventEmitter<string> = new EventEmitter<string>();
  public countries!: any

  constructor(private countryService: CountryServiceService) {
  }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(){
    this.countryService.getAllCountries().subscribe(result => {
      this.countries = result;
      console.log(result);
    })
  }

  sendCountry(country:string){
    this.selectedCountry.emit(country);
  }

}
