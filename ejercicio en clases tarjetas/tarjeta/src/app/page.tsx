'use client'
import { useState, useEffect } from "react";
import Tarjeta from "./componentes/Tarjeta";
import { Persona } from "./modelo/Persona";

export default function Home() {
  const [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    setPersonas([
      { nombre: "Luis Lanza", ocupacion: "Desarrollador Web", pais: "Honduras" },
      { nombre: "Manuel Aguilar", ocupacion: "Biologo", pais: "Honduras" },
      { nombre: "Rafael Triminio", ocupacion: "Contador", pais: "Costa Rica" },
      { nombre: "Julio Torres", ocupacion: "Dj", pais: "Brazil" },
      { nombre: "Allan Gomez", ocupacion: "Soldador", pais: "Colombia" }
    ]);
  }, []);

  return (
    <div className="font-sans min-h-screen p-10 bg-green-100">
      <h2 className="text-2xl font-bold mb-8 text-center">Tarjetas de Presentación</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {personas.map((persona, index) => (
          <Tarjeta
            key={index}
            nombre={persona.nombre}
            ocupacion={persona.ocupacion}
            pais={persona.pais}
          />
        ))}
      </div>
    </div>
  );
}
