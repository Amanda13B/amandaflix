import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo ()
{
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryNames = categorias.map(({nome}) => nome);

  const {handleChange, valores}=useForm({
    nome: 'Video padrão',
    url: "https://www.youtube.com/watch?v=lC_m0kUM5LY",
    categoria:"Games"
  });

  useEffect(() =>
  {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer)=>
      {
        setCategorias(categoriasFromServer);
      });
  }, []);

  console.log(categoryNames);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event)=>
        {
          
          event.preventDefault();
          //alert("Vídeo Cadastrado");
          let boolCadastroSucedido;

          const categoriaEscolhida = categorias.find((categoria) =>
          {
            if(categoria.nome === valores.categoria)
            {
              boolCadastroSucedido = true;
              return categoria.nome === valores.categoria;
            }
            else{
              boolCadastroSucedido = false;
            }
          });

          if(boolCadastroSucedido===true)
          {
            videosRepository.create({
              nome: valores.nome,
              url: valores.url,
              categoriaId: categoriaEscolhida.id
            })
            .then(() => 
            {
              console.log("Cadastro feito com sucesso!")
              history.push('/');
            });
          }
          
        }}>

        <FormField 
            labelText="Nome do Vídeo:"
            tagType="input"
            type="text"
            id="nome" 
            name="nome"
            value= {valores.nome} 
            onChange= {handleChange}
          />

          <FormField 
            labelText="URL:"
            tagType="input"
            type="text"
            id="url" 
            name="url"
            value= {valores.url} 
            onChange= {handleChange}
          />

          <FormField 
            labelText="Categoria:"
            tagType="input"
            type="text"
            id="categoria" 
            name="categoria"
            value= {valores.categoria} 
            onChange= {handleChange}
            suggestions={categoryNames}
          />

        <button type="submit">
          Cadastrar
        </button>

      </form>

      <Link to="/cadastro/categoria">
          Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;