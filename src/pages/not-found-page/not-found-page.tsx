import styles from './not-found-page.module.css';
import { Main } from '../../components/main/main';

export const NotFoundPage = () => {

  return (
    <>
      <Main>
        <div className={styles.error_404_wrap}>
          <h1 data-t="404" className={styles.h1}>404</h1>
        </div>
      </Main>
    </>
  );
}