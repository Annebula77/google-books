interface VolumeInfo {
  title: string;
  categories?: string[];
  authors?: string[];
  description?: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
}

export interface BookItem {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface Books {
  items: BookItem[];
}

export interface BooksResponse {
  totalItems: number;
  items: BookItem[];
  query: string;
}

export type BookState = {
  response: BooksResponse;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentPage: number;
  totalPages: number;
  currentQuery: string;
};