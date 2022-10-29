import React, { useState } from 'react';

import { Button } from './styles';

export const ButtonSubmit = ({ type, text, width, icon, alt, onClick }) => {
  return (
    <>
      <Button type={type} width={width} onClick={onClick}>
        <div>
          {text}
          <img src={icon} alt={alt || 'imagem do icone do botão'} />
        </div>
      </Button>
    </>
  );
};
