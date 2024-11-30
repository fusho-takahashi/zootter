export interface GetPostsResponsePost {
  id: string;
  authorId: string;
  authorName: string;
  text: string;
  createdAt: string;
}

export interface GetPostsResponse {
  offset: number;
  limit: number;
  totalCount: number;
  posts: GetPostsResponsePost[];
}
