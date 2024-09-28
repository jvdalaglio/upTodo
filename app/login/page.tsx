'use client'

import React, { useState } from 'react';
import { Container, Box, FormControl, FormHelperText } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CustomButton } from "@/components/button/button";
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ThemeProvider } from '@mui/material/styles';
import Image from "next/image";
import theme from '../../public/theme/mui'
import './page.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuário logado:', email);
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        setError(error.message);
        console.error('Erro ao fazer login:', error.message);
      } else {
        setError('Erro desconhecido');
        console.error('Erro desconhecido:', error);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ bgcolor: "#121212", display: "flex", alignItems: 'center', padding: 0, flexDirection: 'column', height: 'auto' }}>
        <Box sx={{ height: "auto", width: "100%", justifyContent: "center" }}>
          <Container sx={{ height: '12vh;', padding: '40px 0 0 20px', marginBottom: '1rem' }}>
            <ArrowBackIosIcon sx={{ color: '#D9D9D9' }} onClick={() => window.history.back()} />
          </Container>
          <Container sx={{ backgroundColor: '#121212', height: '75vh', width: '95%' }}>
            <h1 className='title'>Login</h1>
            {error && <FormHelperText error>{error}</FormHelperText>}
            <div className="form-section">

              <form onSubmit={handleSubmit}>
                <div className="input-section">
                  <FormControl fullWidth margin="normal">
                    <label className='form-label' color='primary' htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-describedby="email-helper-text"
                      type="email"
                      className='form-input'
                      placeholder='Insira seu e-mail'
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <label className='form-label' htmlFor="password" >Senha</label>
                    <input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      aria-describedby="password-helper-text"
                      className='form-input'
                      placeholder='Insira sua senha'
                    />
                  </FormControl>
                </div>
                <CustomButton primary type="submit">Entrar</CustomButton>
              </form>
            </div>
            <div className="separator">
              <span>ou</span>
            </div>
            <div className="alternative-login">
              <CustomButton tertiary>
                <div className='alternative-login-button'>
                  <Image src={'/icons/google.svg'} width={20} height={20} alt='Google' />
                  Entrar com o Google
                </div>
              </CustomButton>
              <CustomButton tertiary>
                <div className='alternative-login-button'>
                  <Image src={'/icons/apple.svg'} width={20} height={20} alt='Apple' />
                  Entrar com o iCloud
                </div>
              </CustomButton>
            </div>
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <a href="" className='register-link'>Cadastre-se</a>
            </div>
          </Container>
        </Box>
      </Container >
    </ThemeProvider >
  );
};

export default Login;
