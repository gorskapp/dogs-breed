export interface Dog {
  id: number;
  breedName: string;
  breedType: string;
  furColor: string;
  origin: string;
  imgThumb: string
}

export interface DogDetails {
  id: number;
  breedName: string;
  breedType: string;
  breedDescription: string;
  furColor: string;
  origin: string;
  minHeightInches: number;
  maxHeightInches: number;
  minWeightPounds: number;
  maxWeightPounds: number;
  minLifeSpan: number;
  maxLifeSpan: number;
  imgThumb: string;
}
