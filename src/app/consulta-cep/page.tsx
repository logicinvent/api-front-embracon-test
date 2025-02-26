"use client";
import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { cepService } from "../../services/cepService";
import Loading from "../../components/Loading";
import { CepResult } from "../../types/CepResult";
import styles from "../../styles/ConsultaCep.module.css";

export default function ConsultaCepPage() {
  const [cep, setCep] = useState("");
  const [data, setData] = useState<CepResult | null>(null);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    setLoading(true);
    try {
      const result = await cepService.getCepData(cep);
      setData(result);
    } catch {
      alert("Ta errado e voce sabe disso = )");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <TextField
  label="Digite o CEP"
  value={cep}
  onChange={(e) => {
    const numericValue = e.target.value.replace(/\D/g, "").slice(0, 8);
    setCep(numericValue);
  }}
  inputProps={{ maxLength: 8 }}
/>
      <Button onClick={search} variant="contained" sx={{ ml: 2 }}>
        Buscar
      </Button>

      {loading && <Loading />}

      {data && (
        <Box className={styles.container}>
          <Typography className={styles.title}>Informações do Endereço</Typography>
          
          <div className={styles.info}>
            <label>Rua:</label> <span>{data.rua}</span>
          </div>

          <div className={styles.info}>
            <label>Bairro:</label> <span>{data.bairro}</span>
          </div>

          <div className={styles.info}>
            <label>Cidade:</label> <span>{data.cidade}</span>
          </div>

          <div className={styles.info}>
            <label>UF:</label> <span>{data.uf}</span>
          </div>

          <div className={styles.info}>
            <label>CEP:</label> <span>{data.cep}</span>
          </div>
        </Box>
      )}
    </Box>
  );
}
