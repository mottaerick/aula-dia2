import { useState } from 'react';
import { Like } from './Like';

export function ListaTarefas() {
  const [lista, setLista] = useState(['Banana', 'Maça', 'Sorvete']);

  const [text, setText] = useState('');

  function Adicionar() {
    const listaAdicionada = [...lista, text];
    setLista(listaAdicionada);
    setText('');
  }

  return (
    <>
      <div>Lista</div>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={Adicionar}>Adicionar</button>
      <ul>
        {lista.map((item) => {
          return (
            <li>
              <Like> {item}</Like>
            </li>
          );
        })}
      </ul>
    </>
  );
}
