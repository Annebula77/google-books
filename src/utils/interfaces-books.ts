interface VolumeInfo {
  title: string;
  categories: string[];
  authors: string[];
  description: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
}

interface BookItem {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface Books {
  items: BookItem[];
}

export type BookState = {
  books: Books;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};