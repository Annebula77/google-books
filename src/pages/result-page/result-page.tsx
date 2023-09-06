import { Main } from '../../components/main/main';
import { TotalBooks } from '../../components/total/total';
import { BookList } from '../../components/book-list/book-list';
import { Button } from '../../components/button/button';


export const ResultPage = () => {

  const handleSubmit = () => {
    console.log('Form submitted!');
  };

  return (
    <>
      <Main>
        <TotalBooks />
        <BookList />
        <Button text="Load more..." onSubmit={handleSubmit} />
      </Main>
    </>
  );
}