'use client'

import React, { useState } from 'react';
import { Container, Box, FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CustomButton } from "@/components/button/button";
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ThemeProvider } from '@mui/material/styles';
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
      <Container sx={{ bgcolor: "#121212", display: "flex", alignItems: 'center', padding: 0, flexDirection: 'column', height: '100vh' }}>
        <Box sx={{ height: "70vh", width: "100%", justifyContent: "center" }}>
          <Container sx={{ height: '12vh;', padding: '40px 0 0 20px' }}>
            <ArrowBackIosIcon sx={{ color: '#D9D9D9' }} onClick={() => window.history.back()} />
          </Container>
          <Container sx={{ backgroundColor: '#121212', padding: '40px 0 0 20px', height: '80vh' }}>
            <h1 className='title'>Login</h1>
            {error && <FormHelperText error>{error}</FormHelperText>}
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth margin="normal">
                <InputLabel color='primary' className='label' htmlFor="email">E-mail</InputLabel>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="email-helper-text"
                  type="email"
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="password" >Senha</InputLabel>
                <Input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  aria-describedby="password-helper-text"
                />
              </FormControl>
              <CustomButton type="submit">Entrar</CustomButton>
            </form>
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
