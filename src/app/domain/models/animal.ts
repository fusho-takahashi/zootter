export interface GetAnimalsResponseAnimal {
  id: string;
  name: string;
}

export interface GetAnimalsResponse {
  animals: GetAnimalsResponseAnimal[];
}
