import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BreedsService } from '../breeds.service';
import { DogDetails } from '../dog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  id!: number;
  dogDetailsList$!: DogDetails[];
  dogDetails$!: DogDetails;

  private sub: any;

  constructor(private breedService: BreedsService,
              private activatedRoute: ActivatedRoute,
              private location: Location) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params["id"];
    });
    this.getDogDetailsById(this.id);
    }

  getDogDetailsById(id: number) {
    this.breedService.searchById(id). subscribe((response => {
      this.dogDetailsList$ = response;
      this.dogDetails$ = this.dogDetailsList$[0];
    }));
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
