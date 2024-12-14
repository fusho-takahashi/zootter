export interface GetListsResponseList {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  animals: string[];
}

export interface GetListsResponse {
  lists: GetListsResponseList[];
}

export interface GetListDetailResponse {
  id: string;
  name: string;
  animals: string[];
  description: string;
}
