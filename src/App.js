import React, { Component, Fragment } from 'react';
import './App.css';

import { ArticleList, Info } from './components';

class App extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  async componentDidMount() {
    const response = await fetch(
      'https://packing-list-weight-api.herokuapp.com/articles'
    );
    const articles = await response.json();
    this.setState({
      articles: articles.map(article => ({ ...article, isSelected: false })),
      isLoading: false,
    });
  }

  toggleArticleSelection = name => () => {
    const { articles } = this.state;

    this.setState({
      articles: articles.map(article =>
        article.name === name
          ? { ...article, isSelected: !article.isSelected }
          : article
      ),
    });
  };

  render() {
    const { articles, isLoading } = this.state;

    return (
      <div className="App">
        {isLoading ? (
          <div data-selector="App-isLoading" style={{ marginTop: '1em' }}>
            Loading…
          </div>
        ) : (
          <Fragment>
            <ArticleList
              articles={articles}
              toggleArticleSelection={this.toggleArticleSelection}
            />
            <Info articles={articles} />
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
