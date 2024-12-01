export interface GetListsResponseList {
  id: string;
  name: string;
  createdAt: string;
  animals: string[];
}

export interface GetListsResponse {
  lists: GetListsResponseList[];
}
