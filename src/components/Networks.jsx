export const NetWorks = props => {
  const { styleBackground, generateLinkTumblr, generateLinkTwitter } = props;
  return (
    <div>
      <a
        href={generateLinkTwitter()}
        target='_top'
        rel='noopener noreferrer'
        title='Tweet this quote!'
      >
        <button
          style={styleBackground}
          id='tweet-quote'
          className='button-theme'
        >
          <i className='fa fa-twitter'></i>
        </button>
      </a>
      <a
        href={generateLinkTumblr()}
        target='_blank'
        rel='noopener noreferrer'
        title='Post this quote on tumblr!'
      >
        <button
          id='tumblr-quote'
          className='button-theme'
          style={styleBackground}
        >
          <i className='fa fa-tumblr'></i>
        </button>
      </a>
    </div>
  );
};
