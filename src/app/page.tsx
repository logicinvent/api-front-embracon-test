"use client"
import { useState, useEffect } from "react";

export default function Home() {

  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Teste de React da Embracon</h1>
      <p>Hora Atual: {time}</p>
    </div>
  );
}




