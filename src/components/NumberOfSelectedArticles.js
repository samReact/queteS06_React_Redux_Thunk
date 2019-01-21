import React from 'react';
import PropTypes from 'prop-types';

const NumberOfSelectedArticles = ({ value }) => (
  <div data-selector="NumberOfSelectedArticles">{`Number of selected articles: ${value}`}</div>
);

NumberOfSelectedArticles.propTypes = {
  value: PropTypes.number.isRequired,
};

export default NumberOfSelectedArticles;
