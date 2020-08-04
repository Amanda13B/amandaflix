import React, {useEffect, useState} from 'react';
import Menu from '../../componentes/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import Footer from '../../componentes/Footer';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../componentes/PageDefault';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(()=>
    {
      categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) =>
        {
          setDadosIniciais(categoriasComVideos);
        })
      .catch((err) =>
        {
          console.log(err.message);
        })
    }, []
  );

  //http://localhost:8080/categorias?_embed=videos

  return (
    <PageDefault paddingAll = {0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/*<BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      videoDescription={"Versão de Xbox 360 e PS3"}
      url={dadosIniciais.categorias[0].videos[0].url}/>

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />*/}
      
    </PageDefault>

  );
}

export default Home;
