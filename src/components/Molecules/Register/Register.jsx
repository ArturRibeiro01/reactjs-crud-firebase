import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { GlobalInput } from '../../Atoms/Global/GlobalInput/GlobalInput';
import { ButtonSubmit } from '../../Atoms/Global/ButtonSubmit/ButtonSubmit';

import { Container } from './styles';

import logoImg from '../../../assets/logo.svg';
import arrowImg from '../../../assets/arrow.svg';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log('art-mail', email);
  // console.log('art-password', password);

  return (
    <>
      <Container>
        <header className="header">
          <img src={logoImg} alt="Workflow" className="logoImg" />
          <span>Por favor faça o seu cadastro</span>
        </header>

        <form>
          <GlobalInput
            htmlFor="email"
            label="email"
            type="text"
            name="email"
            id="email"
            placeholder="seuemail@seudominio.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <GlobalInput
            htmlFor="password"
            label="password"
            type="password"
            name="password"
            id="password"
            placeholder="**************"
            onChange={(e) => setPassword(e.target.value)}
          />

          <ButtonSubmit text="Cadastrar" width="" icon={arrowImg} />

          <footer>
            <p>Se você já tiver uma conta criada</p>
            <Link to="/">Volte para a tela inicial</Link>
          </footer>
        </form>
      </Container>
    </>
  );
};