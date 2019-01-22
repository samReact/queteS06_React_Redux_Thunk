export const fetchArticles = dispatch => async () => {
  dispatch({
    type: 'FETCH_ARTICLES__BEGIN',
  });
  const response = await fetch(
    'https://packing-list-weight-api.herokuapp.com/articles'
  );
  const articles = await response.json();
  dispatch({
    type: 'FETCH_ARTICLES__RESOLVE',
    articles,
  });
};

export const toggleArticleSelection = dispatch => articleName => () => {
  dispatch({
    type: 'TOGGLE_ARTICLE_SELECTION',
    articleName,
  });
};
