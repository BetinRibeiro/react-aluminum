import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Project from './pages/project';

const Routes = () =>(
  // BrowserRouter definir que estamos usando 
  //as rotas atraves de um brouser, Switch deixar uma rota ser 
  //chamada por vez
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route  path="/project/:id" component={Project}/>
    </Switch>
  
  </BrowserRouter>
);

export default Routes;