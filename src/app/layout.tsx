import { ReactNode } from "react";
import { CssBaseline, Container } from "@mui/material";
import Navbar from "@/components/Navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Embracon Buscador de endereço por CEP </title>
      </head>
      <body>
        <CssBaseline />
        <Navbar />
        <Container sx={{ mt: 4 }}>
          {children}
        </Container>
      </body>
    </html>
  );
}
