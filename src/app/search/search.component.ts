import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { BreedsService } from '../breeds.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  dogsList$!: Dog[];

  constructor(private breedService: BreedsService) {}

  ngOnInit(): void {
    this.gettListOfAllBreeds();
  }

  gettListOfAllBreeds() {
    this.breedService.getAllBreeds().subscribe((response => {
      this.dogsList$ = response;
      console.log(this.dogsList$);
    }));
  }

}
