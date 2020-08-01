import React from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';

function CadastroCategoria ()
{
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label to="categoria">Nome da Categoria:</label>
        <br/>
        <input type="text" id="categoria" name="categoria"/>

        <br/>
        <br/>

        <button>
          Cadastrar
        </button>

      </form>

      <Link to="/">
          Voltar para a Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;