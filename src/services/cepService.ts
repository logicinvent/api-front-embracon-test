import { CepResult } from "../types/CepResult";
import { LogResult } from "../types/LogResult";

const API_BASE_URL = "http://localhost:8080";

export const cepService = {
  async getCepData(cep: string): Promise<CepResult> {
    const response = await fetch(`${API_BASE_URL}/consulta-cep/${cep}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Cep ou erro de servidor");
    return response.json();
  },

  async getLogsByUf(uf: string): Promise<LogResult[]> {
    const response = await fetch(`${API_BASE_URL}/lista-ceps?uf=${uf}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("UF inválida");
    return response.json();
  },
};
