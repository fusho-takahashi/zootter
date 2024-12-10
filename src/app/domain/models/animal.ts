export interface GetAnimalsResponseAnimal {
  id: string;
  name: string;
}

export interface GetAnimalsResponse {
  animals: GetAnimalsResponseAnimal[];
}

export interface GetAnimalDetailResponse {
  id: string;
  name: string;
  description: string;
}
