export interface AuthorType {
  name: string;
  email: string;
  phone: string;
}

export interface RatingsType {
  upvotes: number;
  downvotes: number;
  rating: number;
}

export interface NewsType {
  id: string;
  title: string;
  story_date: string;
  excerpt: string;
  story_content: string;
  author: AuthorType;
  ratings: RatingsType;
}
