'use client'

import { Container } from "@mui/material";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import './onboarding.scss'
import { CustomButton } from "../button/button";

export default function Onboarding() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setShowOnboarding(false);
    }, 3000);
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 2) {
        router.push('/welcome');
      }
      return (prevIndex + 1) % 3;
    });
  };

  // Função para voltar ao item anterior
  const handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex >= 1 ? (prevIndex === 0 ? 2 : prevIndex - 1) : prevIndex);
  };

  return (
    <div className="onboarding">
      <CssBaseline />
      {showOnboarding
        ?
        <Container sx={{ display: "flex", justifyContent: "center", width: "100%", bgcolor: "#121212", padding: 0 }}>
          <Box sx={{ bgcolor: "#121212", height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src={"/images/logo.svg"} width={150} height={150} alt=""></Image>
          </Box>
        </Container>
        :
        <Container sx={{ display: "flex", justifyContent: "center", padding: 0 }}>
          <Box sx={{ bgcolor: "#121212", height: "100vh", width: "100%", justifyContent: "center" }}>
            <Container sx={{ height: '5vh', display: 'flex', alignItems: 'end' }}>
              <Link href="/welcome" className="skip">Pular</Link>
            </Container>
            <Container>

              <Carousel activeIndex={activeIndex} controls={false} slide={false} interval={null} fade>
                <Carousel.Item>
                  <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image src={'/images/onboarding-01.svg'} alt="" width={250} height={250} />
                  </Container>
                  <Carousel.Caption>
                    <span className="title-onboarding">Gerencie suas tarefas</span>
                    <p className="text-onboarding">Você pode gerenciar todas as suas tarefas diárias no DoMe de forma fácil e gratuita.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image src={'/images/onboarding-02.svg'} alt="" width={300} height={300} />
                    <Carousel.Caption>
                      <span className="title-onboarding">Crie sua rotina diária</span>
                      <p className="text-onboarding">No Uptodo, você pode criar uma rotina personalizada para se manter produtivo.</p>
                    </Carousel.Caption>
                  </Container>
                </Carousel.Item>
                <Carousel.Item>
                  <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image src={'/images/onboarding-03.svg'} alt="" width={300} height={300} />
                    <Carousel.Caption>
                      <span className="title-onboarding">Organize suas tarefas</span>
                      <p className="text-onboarding">
                        Você pode organizar suas tarefas diárias adicionando-as em diferentes categorias.
                      </p>
                    </Carousel.Caption>
                  </Container>
                </Carousel.Item>
              </Carousel>
            </Container>
            <Container sx={{ height: '25vh', padding: "0 8%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <CustomButton onClick={handlePrev} secondary>Voltar</CustomButton>
              <CustomButton onClick={handleNext} primary>{activeIndex === 2 ? "Começar" : "Próximo"}</CustomButton>
            </Container>
          </Box>
        </Container>
      }
    </div>
  )
}