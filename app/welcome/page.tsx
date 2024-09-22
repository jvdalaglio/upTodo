'use client'

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, CssBaseline } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './page.scss';

export default function Welcome() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ bgcolor: "#121212", display: "flex", alignItems: 'center', padding: 0, flexDirection: 'column', height: '100vh' }}>
        <Box sx={{ height: "70vh", width: "100%", justifyContent: "center" }}>
          <Container sx={{ height: '12vh;', padding: '40px 0 0 20px' }}>
            <ArrowBackIosIcon sx={{ color: '#D9D9D9' }} onClick={() => window.history.back()}></ArrowBackIosIcon>
          </Container>
          <Container sx={{ height: '25vh', display: "flex", flexDirection: "column", justifyContent: "center", padding: '0', textAlign: 'center' }}>
            <span className="title-welcome">
              Seja bem-vindo ao UpTodo!</span>
            <p className="text-welcome">
              Faça login na sua conta ou crie uma nova para continuar.
            </p>
          </Container>
        </Box>
        <Box sx={{ heigth: '30vh', width: "90%", display: 'flex', flexDirection: 'column', gap: '3%' }}>
          <Button sx={{ color: '#FFFFFF', bgcolor: '#8875FF', height: '48px', marginBottom: '3%' }}>Entrar</Button>
          <Button sx={{ color: '#D9D9D9', height: '48px', borderColor: '#8875FF' }} variant="outlined">Registrar-se</Button>
        </Box>
      </Container>
    </>
  );
}
