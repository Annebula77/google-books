import React from 'react';
import { mockData } from '../../utils/mock-data';
import { ExplicitBookCard } from './explicit-book-card';

export const SingleBook = () => {
  return (
    <div>
      {mockData.items && <ExplicitBookCard book={mockData.items[5]} />}
    </div>
  );
};
