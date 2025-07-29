import React, { useEffect, useState } from 'react';

export default function ContadorPalabras() {
  const [texto, setTexto] = useState<string>('');
  const [color, setColor] = useState<string>('black');

  useEffect(() => {
    const cantidad = texto.length;

    if (cantidad < 10) {
      setColor('yellow');
    } else if (cantidad >= 10 && cantidad < 50) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, [texto]);

  return (
    <div>
      <textarea
        rows={5}
        cols={30}
        placeholder="Escribe aquí"
        value={texto}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTexto(e.target.value)}
      />
      <p style={{ color: color }}>
        {texto}
      </p>
    </div>
  );
}
