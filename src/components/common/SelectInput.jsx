/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({
  name, label, onChange, defaultOption, defaultValue, error, options
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <div className="field">
      <select
          name={name}
          className="form-control"
          onChange={onChange}
          defaultValue={defaultValue}
        >
        <option value="">{defaultOption}</option>
        {options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  </div>
);


SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SelectInput;