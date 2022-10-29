import React, { useState } from 'react';

import { Button } from './styles';

export const ButtonSubmit = ({ text, width, icon, alt, onClick }) => {
  return (
    <>
      <Button width={width} onClick={onClick}>
        <div>
          {text}
          <img src={icon} alt={alt || 'imagem do icone do botão'} />
        </div>
      </Button>
    </>
  );
};
