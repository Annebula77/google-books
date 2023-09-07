import { Main } from '../../components/main/main';
import { TotalBooks } from '../../components/total/total';
import { BookList } from '../../components/book-list/book-list';
import { Button } from '../../components/button/button';
import { useLocation } from 'react-router-dom';


export const ResultPage = () => {

  const location = useLocation();
  const searchParams = location.state as { query: string, category: string, orderBy: string };


  const handleSubmit = () => {
    console.log('Form submitted!');
  };

  return (
    <>
      <Main>
        <TotalBooks />
        <BookList searchParams={searchParams} />
        <Button text="Load more..." onSubmit={handleSubmit} />
      </Main>
    </>
  );
}