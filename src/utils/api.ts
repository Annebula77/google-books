import axios from 'axios';

export const fetchBooks = async (query: string, category: string, orderBy: string) => {
  const apiKey = 'AIzaSyAFaEDEBAxUSYfSo-76ltyekR8wJ51fVMI';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}${category !== 'all' ? `+subject:${category}` : ''}&orderBy=${orderBy}&key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};