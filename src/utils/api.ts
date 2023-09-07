import axios, { AxiosError } from 'axios';


function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError === true;
}

export const fetchBooks = async (
  query: string,
  category: string,
  orderBy: string,
  startIndex: number = 0,
  maxResults: number = 30
) => {
  const apiKey = 'AIzaSyAFaEDEBAxUSYfSo-76ltyekR8wJ51fVMI'
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}${category !== 'all' ? `+subject:${category}` : ''}&orderBy=${orderBy}&key=${apiKey}&startIndex=${startIndex}&maxResults=${maxResults}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Ошибка от сервера:", error.response?.data);
      console.error("Статус ошибки:", error.response?.status);
      console.error("Заголовки ошибки:", error.response?.headers);
    } else if (error instanceof Error) {
      console.error("Произошла ошибка:", error.message);
    } else {
      console.error("Произошла неизвестная ошибка.");
    }
    throw error;
  }
}
