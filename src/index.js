import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import Error from './pages/404';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path = "/" component={Home} exact/>
      <Route path = "/cadastro/video" component={CadastroVideo} exact/>
      <Route path = "/cadastro/categoria" component={CadastroCategoria} exact/>
      <Route component={Error}/>
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

