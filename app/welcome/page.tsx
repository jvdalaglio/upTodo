'use client'

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, CssBaseline } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Welcome() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ display: "flex", justifyContent: "center", padding: 0 }}>
        <Box sx={{ bgcolor: "#121212", height: "100vh", width: "100%", justifyContent: "center" }}>
          <Container sx={{ height: '5vh', padding: '2vh 0 0 0 ' }}>
            <ArrowBackIosIcon sx={{ color: '#D9D9D9' }} onClick={() => window.history.back()}></ArrowBackIosIcon>
          </Container>
          <Container sx={{ height: '25vh', padding: "0 8%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Button sx={{ color: '#D9D9D9', height: '48px' }}>Voltar</Button>
            <Button sx={{ color: '#FFFFFF', bgcolor: '#8875FF', height: '48px' }}></Button>
          </Container>
        </Box>
      </Container>
    </>
  );
}
