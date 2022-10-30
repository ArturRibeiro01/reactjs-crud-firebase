import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebaseConfig';

import { GlobalInput } from '../../Atoms/Global/GlobalInput/GlobalInput';
import { ButtonSubmit } from '../../Atoms/Global/ButtonSubmit/ButtonSubmit';

import { Container } from './styles';

import logoImg from '../../../assets/logo.svg';
import arrowImg from '../../../assets/arrow.svg';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <p>Carregando</p>;
  }

  if (user) {
    return (
      <>
        <div>
          <p>Registered User: {user.email}</p>
          <p>Registered User: {user?.reloadUserInfo?.email}</p>
        </div>
        {console.log(user)}
      </>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

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

          <ButtonSubmit
            text="Entrar"
            width=""
            icon={arrowImg}
            onClick={handleSignIn}
          />

          <footer>
            <p>Você não tem uma conta?</p>
            <Link to="/register">Crie a sua conta aqui</Link>
          </footer>
        </form>
      </Container>
    </>
  );
};
