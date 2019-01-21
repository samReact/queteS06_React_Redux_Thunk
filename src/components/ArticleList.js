import React from 'react';
import PropTypes from 'prop-types';

import { Article } from '.';

const ArticleList = ({ articles, toggleArticleSelection }) => (
  <ul>
    {articles.map(article => (
      <Article
        handleCheckboxChange={toggleArticleSelection(article.name)}
        isSelected={article.isSelected}
        key={article.name}
        name={article.name}
        weight={article.weight}
      />
    ))}
  </ul>
);

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  toggleArticleSelection: PropTypes.func.isRequired,
};

export default ArticleList;
