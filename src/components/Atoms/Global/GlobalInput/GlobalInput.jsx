import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label } from './styles';

export const GlobalInput = ({
  htmlFor,
  label,
  type,
  name,
  id,
  placeholder,
  onChange,
}) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Container>
  );
};
