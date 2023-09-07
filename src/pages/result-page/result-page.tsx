import { Main } from '../../components/main/main';
import { TotalBooks } from '../../components/total/total';
import { BookList } from '../../components/book-list/book-list';
import { Button } from '../../components/button/button';
import { useLocation } from 'react-router-dom';
import { loadBooks } from '../../service/book-slice/book-slice';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { useCallback } from 'react';

export const ResultPage = () => {
  const location = useLocation();
  const searchParams = location.state as { query: string, category: string, orderBy: string };

  const { response, currentPage } = useAppSelector(state => state.books);
  const dispatch = useAppDispatch();


  const handleLoadMore = useCallback(() => {
    const newStartIndex = currentPage * 30;
    dispatch(loadBooks({ ...searchParams, startIndex: newStartIndex }));
  }, [dispatch, searchParams, currentPage]);

  return (
    <>
      <Main>
        <TotalBooks /> {/* Вы можете передать totalItems напрямую, если ваш компонент TotalBooks это поддерживает */}
        <BookList searchParams={searchParams} />

        {/* Отображайте кнопку "Load more" только если есть еще элементы для загрузки */}
        {response.totalItems > currentPage * 30 && (
          <Button text="Load more..." onSubmit={handleLoadMore} />
        )}
      </Main>
    </>
  );
}

