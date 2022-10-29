import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { GlobalInput } from '../../Atoms/Global/GlobalInput/GlobalInput';
import { ButtonSubmit } from '../../Atoms/Global/ButtonSubmit/ButtonSubmit';

import { Container } from './styles';

import logoImg from '../../../assets/logo.svg';
import arrowImg from '../../../assets/arrow.svg';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log('art-mail', email);
  // console.log('art-password', password);

  return (
    <>
      <Container>
        <header className="header">
          <img src={logoImg} alt="Workflow" className="logoImg" />
          <span>Por favor digite suas informações de login</span>
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

          <a href="https://www.globo.com/">Esqueceu sua senha ?</a>

          <ButtonSubmit text="Entrar" width="" icon={arrowImg} />

          <footer>
            <p>Você não tem uma conta?</p>
            <Link to="/register">Crie a sua conta aqui</Link>
          </footer>
        </form>
      </Container>
    </>
  );
};


git remote set-url origin https://github.com/ArturRibeiro01/reactjs-crud-firebase.git