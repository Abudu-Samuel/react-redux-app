/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  name, label, onChange, placeholder, value, error, defaultValue
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <div className="field">
      <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  </div>
);


TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default TextInput;