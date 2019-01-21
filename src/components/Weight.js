import React from 'react';
import PropTypes from 'prop-types';

const Weight = ({ value }) => (
  <div data-selector="Weight">{`Weight: ${value}kg`}</div>
);

Weight.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Weight;
