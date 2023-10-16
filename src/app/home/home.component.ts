import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreedsService } from '../breeds.service';
import { Dog, DogDetails } from '../dog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dogsList$!: Dog[];
  dogDetails$!: DogDetails;

  constructor(private breedService: BreedsService,
              private router: Router) {}

  ngOnInit(): void {
    // just gatting real data to display on home page
    this.getListOfDogsByFurColor("blue merle");
  }

  goToDogDetails(id: number) {
    this.router.navigate(["/details", id]);
  }
  getListOfDogsByFurColor(color: string) {
    this.breedService.serachByFurColor(color).subscribe((response) => {
      this.dogsList$ = response;
    })
  }

}
