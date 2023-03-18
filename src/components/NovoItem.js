import { useState } from 'react';
import Item from './Item';
import List from './List';

function NovoItem() {

  function criarItem(e) {
    e.preventDefault();

    return (
      console.log(`Criadaaaaa carai: atividade = ${atividade}`)

    );
  }

  const [atividade, setAtividade] = useState('');

  return (
    <>
      <form onSubmit={criarItem}>
        <label htmlFor="novaAtividade" >Atividade: </label>
        <input id="novaAtividade" name="novaAtividade" onChange={(e) => setAtividade(e.target.value)} placeholder="Nova atividade"></input>
        <Item atividade={atividade}/>
        {/* List.itens[4] = {atividade} */}
        <List />
      </form>
    </>
  );

}

export default NovoItem