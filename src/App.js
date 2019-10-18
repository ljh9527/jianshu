import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import login from './pages/login';
import Write from './pages/write';
import { GlobalStyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <IconfontStyle />
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/login' exact component={login}></Route>
          <Route path='/write' exact component={Write}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
