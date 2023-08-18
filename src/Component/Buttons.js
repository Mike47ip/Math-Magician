import { PropTypes } from 'prop-types';
import React from 'react';

function Buttons({ label, className }) {
  return (
    <button type="button" className={className}>
      {label}
    </button>
  );
}

Buttons.defaultProps = {
  className: '',
};

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Buttons;
