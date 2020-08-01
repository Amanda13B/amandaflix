import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


const Pagina404 = () => (<div> <h1>Página 404</h1> </div>)

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      {/*A ordem das rotas é muito importante. Caso a primeira já seja a App, ele não buscará por outra rota pelo fato de a / ser uma condição verdadeira inicial */}
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
