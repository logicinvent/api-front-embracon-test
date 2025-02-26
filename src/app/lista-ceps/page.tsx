"use client";
import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { cepService } from "../../services/cepService";
import Loading from "../../components/Loading";
import { LogResult } from "../../types/LogResult";

export default function ListaCepsPage() {
  const [uf, setUf] = useState("");
  const [data, setData] = useState<LogResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [TemAlgo, setTemAlgo] = useState(false);

  const search = async () => {
    setLoading(true);
    setData(null);
    setTemAlgo(false);

    try {
      const result = await cepService.getLogsByUf(uf);
      setData(result);
    } catch {
      setData(null);
    } finally {
      setLoading(false);
      setTemAlgo(true);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <TextField
        label="Digite a UF"
        value={uf}
        onChange={(e) => setUf(e.target.value.toUpperCase())}
      />
      <Button onClick={search} variant="contained" sx={{ ml: 2 }}>
        Buscar
      </Button>

      {loading && <Loading />}

      {}

      {data && data.length > 0 ? (
        data.map((log, index) => (
          <Typography key={index} sx={{ mt: 1 }}>
            CEP: {log.cep} - Data Consulta: {log.dtHrConsulta}
          </Typography>
        ))
      ) : (
        TemAlgo && <Typography sx={{ mt: 3 }}>Nenhum resultado encontrado.</Typography>
      )}
    </Box>
  );
}
