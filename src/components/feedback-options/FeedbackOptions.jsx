import React from 'react';
import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

export const FeedbackOption = ({ handleIcrement, arrayNamesState }) => {
  return (
    <div className={css.feedbackOption}>
      {arrayNamesState.map(name => {
        return (
          <button
            className={css.feedbackOptionBtn}
            key={name}
            name={name}
            type="button"
            onClick={handleIcrement}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOption.propTypes = {
  handleIcrement: PropTypes.func.isRequired,
  arrayNamesState: PropTypes.arrayOf(PropTypes.string).isRequired,
};
