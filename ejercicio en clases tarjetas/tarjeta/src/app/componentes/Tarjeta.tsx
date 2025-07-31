import React from "react";

import { Persona } from "../modelo/Persona";

export default function Tarjeta({ nombre, ocupacion, pais }: Persona) {
  return (
    <div className="border p-4 rounded-md w-60 bg-white shadow-md">
      <h3 className="text-lg font-semibold mb-2">{nombre}</h3>
      <p><strong>Ocupación:</strong> {ocupacion}</p>
      <p><strong>País:</strong> {pais}</p>
    </div>
  );
}
