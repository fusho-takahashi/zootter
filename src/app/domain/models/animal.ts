export interface Animal {
  id: string;
  name: string;
}

export interface GetAnimalsResponse {
  animals: Animal[];
}
