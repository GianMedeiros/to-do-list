import Item from "./Item";
import NovoItem from "./NovoItem";
import { useState } from 'react';

  function List() {

    let itens = ["pescar", "nadar", "comer"]

    const [atividade, setAtividade] = useState()

    function criarItem(e) {
      e.preventDefault();
  
      novoItem(atividade)
      return (
        console.log(`Criadaaaaa carai: atividade = ${atividade}`)&
        console.log(`Lista = ${itens}`)
  
      );
    }

    function novoItem(atividade) {

      console.log(`item novo = ${atividade}`)
      itens.push(atividade)
      console.log(itens)
    }


    return (
      <>
        <div>
          <form onSubmit={criarItem}>
            <label htmlFor="novaAtividade" >Atividade: </label>
            <input id="novaAtividade" name="novaAtividade" onChange={(e) => setAtividade(e.target.value)} placeholder="Nova atividade"></input>
            <Item atividade={atividade}/>
          </form>
        </div>
        <ul>
          {/* <NovoItem /> */}
          <Item atividade={itens[0]}/>
          <Item atividade={itens[1]}/>
          <Item atividade={itens[2]}/>

        </ul>
      </>
    );


  }

export default List