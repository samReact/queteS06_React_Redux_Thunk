import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ handleCheckboxChange, isSelected, name, weight }) => {
  const checkboxId = `checkbox-${name}`;

  return (
    <label
      data-selector="Article"
      htmlFor={checkboxId}
      style={{ display: 'block' }}
    >
      <input
        type="checkbox"
        id={checkboxId}
        onChange={handleCheckboxChange}
        checked={isSelected}
      />
      {`${name} (${weight}kg)`}
    </label>
  );
};

Article.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
};

export default Article;
