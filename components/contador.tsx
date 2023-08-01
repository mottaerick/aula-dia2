import { useState } from "react";

export interface ContadorProps {
  valorInicial: number;
}

export function Contador({ valorInicial }: ContadorProps)
 {
 const [valor, setvalor] = useState(valorInicial);
function Adicionar() {
  setvalor (valor + 1)
}



  return (
    <div>
      <h2>Contador = {valor}</h2>
      <button onClick={Adicionar}>adicionar</button>
    </div>
  );
}
