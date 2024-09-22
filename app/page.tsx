'use client'

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowOnboarding(false);
    }, 3000);
  }, []);

  
 return (
  <>
   <CssBaseline />
   {showOnboarding ?
     <Container sx={{ display: "flex", justifyContent: "center", padding: 0 }}>
      <Box sx={{ bgcolor: "#121212", height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image src={"/images/logo.svg"} width={150} height={150} alt=""></Image>
      </Box>
     </Container>
    : 
      <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", width: "96%", justifyContent: "center" }}>
        <Container>
          <span></span>
        </Container>
        <Container sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Image src={"/images/onboarding-01.svg"} width={250} height={250} alt=""></Image>
        </Container>
      </Box>
     </Container>
   }
  </>
 );
}
