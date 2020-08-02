import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';

function CadastroCategoria ()
{
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {nome:'', descricao:'', cor:''};

  const [valores, setValores] = useState(valoresIniciais);

  function setValorUnico(chaveCampo, valorCampo)
  {
    setValores({
      ...valores,
      [chaveCampo]: valorCampo //nome: valorCampo
    })
  }

  function handleChange(info)
  {
    console.log("Entrou na função handleChange");
    setValorUnico(info.target.getAttribute('name'), info.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit= {function handleSubmit(infos){
        infos.preventDefault();
        {/*O preventDefault serve para fazer com que a página não recarregue quando o form for enviado*/}

        setCategorias([
          ...categorias, valores
        ]);

        setValores(valoresIniciais);
      }}>

        <FormField 
          labelText="Nome da Categoria:"
          type="text"
          id="nome" 
          name="nome"
          value= {valores.nome} 
          onChange= {handleChange}
        />

        {/*
        <div>

          <label to="nome">Nome da Categoria:</label>

          <br/>

          <input type="text" id="nome" name="nome" value={valores.nome} 
          onChange= {handleChange}/>

        </div>
        */}

        <div>

          <label to="descricao">Descrição:</label>

          <br/>

          <textarea type="text" id="descricao" name="descricao" value={valores.descricao} 
          onChange= {handleChange}/>

        </div>

        <FormField 
          labelText="Cor:"
          type="color"
          id="cor" 
          name="cor"
          value= {valores.cor} 
          onChange= {handleChange}
        />

        {/*
        <div>

          <label to="cor">Cor:</label>

          <br/>

          <input type="color" id="cor" name="cor" value={valores.cor} 
          onChange= {handleChange}/>

        </div>
        */}

        <br/>

        <button>
          Cadastrar
        </button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          );
        })}
      </ul>

      <Link to="/">
          Voltar para a Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;