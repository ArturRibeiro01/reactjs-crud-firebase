import React, { useState } from 'react';

import { Button } from './styles';

export const ButtonSubmit = ({ text, width, icon, alt }) => {
  const [modelState, setModelState] = useState('');

  return (
    <>
      <Button width={width}>
        <div>
          {text}
          <img src={icon} alt={alt || 'imagem do botão de login'} />
        </div>
      </Button>
    </>
  );
};
