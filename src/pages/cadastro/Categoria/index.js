import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import useForm from '../../../hooks/useForm';


function CadastroCategoria ()
{
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {nome:'', descricao:'', cor:''};

  const {valores, handleChange, clearForm} = useForm(valoresIniciais);
  
  useEffect( ()=>
    {
      const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : "https://amandaflix.herokuapp.com/categorias";
      fetch(URL)
        .then(async (respostaDoServidor) =>
          {
            const resposta = await respostaDoServidor.json();
            setCategorias([
              ...resposta
            ]);
          })

      /*setTimeout(() =>
        {
          setCategorias([
            ...categorias,
            {
              id: 1,
              nome: "Games",
              descrição: "Games que gosto",
              cor: "#C40A78"
            },
            {
              id: 2,
              nome: "Animações/Filmes",
              descrição: "Animações e filmes que gosto",
              cor: "#5109BA"
            }
          ]);
        }, 3 * 1000);*/
    },[]
  );

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit= {function handleSubmit(infos){
        infos.preventDefault();
        {/*O preventDefault serve para fazer com que a página não recarregue quando o form for enviado*/}

        setCategorias([
          ...categorias, valores
        ]);

        clearForm(valoresIniciais);
      }}>

        <FormField 
          labelText="Nome da Categoria:"
          tagType="input"
          type="text"
          id="nome" 
          name="nome"
          value= {valores.nome} 
          onChange= {handleChange}
        />

        {/* essa era a forma usada antes de transformar o campo de preenchimento em algo reutilizável
        para usar nos outros campos, basta substituir a Label e os valores dos atributos passados (type, id, name e value)
        <div>

          <label to="nome">Nome da Categoria:</label>

          <br/>

          <input type="text" id="nome" name="nome" value={valores.nome} 
          onChange= {handleChange}/>

        </div>
        */}

        <FormField 
          labelText="Descrição:"
          tagType="textarea"
          type="text"
          id="descricao" 
          name="descricao"
          value= {valores.descricao} 
          onChange= {handleChange}
        />

        <FormField 
          labelText="Cor:"
          tagType="input"
          type="color"
          id="cor" 
          name="cor"
          value= {valores.cor} 
          onChange= {handleChange}
        />

        <br/>

        <button>
          Cadastrar
        </button>

      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => {
          return(
            <li key={`${categoria.nome}`}>
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