import { useState } from 'react';
import { randomColor, randomIndex, quotes } from '../constants/constants';
import { NetWorks } from './Networks';
import { NewQuote } from './NewQuote';

export const QuoteApp = () => {
  const [index, setIndex] = useState(randomIndex());
  const [theme, setTheme] = useState(randomColor());

  const styleBackground = {
    backgroundColor: theme,
    transition: '1s',
  };
  const styleColor = {
    color: theme,
    transition: '1s',
  };
  const quoteURL = () => {
    const authorURL = quotes[index].author.split(' ').join('+');
    const phraseURL = quotes[index].quote
      .split(' ')
      .join('+')
      .replace(/[%]/g, '%25');
    return { authorURL, phraseURL };
  };
  const generateLinkTumblr = () => {
    return `https://www.tumblr.com/widgets/share/tool?posttype=index&tags=quotes%2Ceduardo-gallardo&caption=${
      quoteURL().authorURL
    }&content=${
      quoteURL().phraseURL
    }&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
  };
  const generateLinkTwitter = () => {
    return `https://twitter.com/intent/tweet?hashtags=quotes,gallardo&related=freecodecamp&text=%22${
      quoteURL().phraseURL
    }%22%20${quoteURL().authorURL}`;
  };
  const props = {
    styleBackground: styleBackground,
    generateLinkTumblr: generateLinkTumblr,
    generateLinkTwitter: generateLinkTwitter,
    setIndex: setIndex,
    setTheme: setTheme,
  };
  return (
    <div className='wraper' style={styleBackground}>
      <main id='quote-box' style={styleColor}>
        <p id='text' className='quote-text'>
          <i className='fa fa-quote-left'></i>
          {quotes[index].quote}
        </p>
        <p id='author' className='quote-author'>
          {quotes[index].author}
        </p>
        <section className='buttons'>
          <NetWorks {...props} />
          <NewQuote {...props} />
        </section>
      </main>
      <footer className='footer'>by Gallardo</footer>
    </div>
  );
};
