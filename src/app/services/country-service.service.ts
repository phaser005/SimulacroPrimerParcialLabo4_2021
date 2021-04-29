import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  //https://restcountries.eu/rest/v2/name/aruba?fullText=true
  private currentCountry!:string;

  constructor(private httpClient: HttpClient) {
    this.currentCountry = "Argentina"
   }

  public getCurrentCountry(){
    return this.currentCountry;
  }

  public assignNewCountry(country:string){
    this.currentCountry = country;
  }

  public getAllCountries(){
    return this.httpClient.get("https://restcountries.eu/rest/v2/all");
  }
}
