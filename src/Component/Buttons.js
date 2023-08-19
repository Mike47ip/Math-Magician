import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ label, className, onClick }) {
  return (
    <button type="button" className={className} onClick={(e) => onClick(e)}>
      {label}
    </button>
  );
}

Buttons.defaultProps = {
  className: '',
  onClick: {},
};

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Buttons;
