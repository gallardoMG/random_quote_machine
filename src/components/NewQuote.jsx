import React from 'react';
import { randomColor, randomIndex } from '../constants/constants';

export const NewQuote = props => {
  const { styleBackground, setIndex, setTheme } = props;
  const effectTransition = () => {
    const text = document.querySelector('.quote-text');
    const author = document.querySelector('.quote-author');
    text.classList.toggle('transition');
    author.classList.toggle('transition');
  };
  return (
    <button
      onClick={() => {
        setIndex(randomIndex());
        setTheme(randomColor());
        effectTransition();
      }}
      style={styleBackground}
      id='new-quote'
      className='button-theme'
    >
      New quote
    </button>
  );
};
