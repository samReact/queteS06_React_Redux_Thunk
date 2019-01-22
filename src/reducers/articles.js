const articles = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES__RESOLVE':
      return action.articles.map(article => ({
        ...article,
        isSelected: false,
      }));
    case 'TOGGLE_ARTICLE_SELECTION':
      return state.map(article =>
        article.name === action.articleName
          ? { ...article, isSelected: !article.isSelected }
          : article
      );
    default:
      return state;
  }
};

export default articles;
