import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog, DogDetails } from './dog';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  private hostURL = "https://dogbreeddb.p.rapidapi.com";

  private HttpHeaders = {
    'X-RapidAPI-Host': 'dogbreeddb.p.rapidapi.com',
    'X-RapidAPI-Key': '52ef9f38demshdaf0d8f9b80719fp113d23jsn4b8b54eed42d'
  };

  paramsForEndpoints = {
    furColor: "furColor__icontains",
    id: "id"
  }

  constructor(private http: HttpClient) { }

  serachByFurColor(furColor: string): Observable<Dog[]> {
    const httpOptions = {
      headers: new HttpHeaders(this.HttpHeaders),
      params: new HttpParams().set(this.paramsForEndpoints.furColor, furColor)
    };
    return this.http.get<Dog[]>(this.hostURL, httpOptions);
  }

  searchById(id: number): Observable<DogDetails[]> {
    const httpOptions = {
      headers: new HttpHeaders(this.HttpHeaders),
      params: new HttpParams().set(this.paramsForEndpoints.id, id)
    }
    return this.http.get<DogDetails[]>(this.hostURL, httpOptions);
  }

  getAllBreeds(): Observable<Dog[]> {
    const httpOptions = {
      headers: new HttpHeaders(this.HttpHeaders)
    };
    return this.http.get<Dog[]>(this.hostURL, httpOptions);
  }
}
