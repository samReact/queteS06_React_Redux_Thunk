import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { ArticleListContainer, Info } from './components';

class App extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { areArticlesBeingFetched } = this.props;

    return (
      <div className="App">
        {areArticlesBeingFetched ? (
          <div data-selector="App-isLoading" style={{ marginTop: '1em' }}>
            Loading…
          </div>
        ) : (
          <Fragment>
            <ArticleListContainer />
            <Info />
          </Fragment>
        )}
      </div>
    );
  }
}

App.propTypes = {
  areArticlesBeingFetched: PropTypes.bool.isRequired,
  fetchArticles: PropTypes.func.isRequired,
};

export default App;
