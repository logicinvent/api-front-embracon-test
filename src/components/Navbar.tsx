"use client";
import { AppBar, Toolbar, Button } from "@mui/material";
import Link from "next/link";

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Button color="inherit" component={Link} href="/">Home</Button>
      <Button color="inherit" component={Link} href="/consulta-cep">Consulta CEP</Button>
      <Button color="inherit" component={Link} href="/lista-ceps">Lista de Logs</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
