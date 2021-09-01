import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BackgroundVideo from './components/bg-video/bg-video.component';
import './App.css'

import Header from './components/header/header.component';
import CharactersPage from './pages/charactersPage/charactersPage.page.jsx';
import HomePage from './pages/homePage/homePage.page.jsx';

function App() {
  return (
    <div>
      <Header />
      <BackgroundVideo/>
      <Switch>
        <CharactersPage path="/characters" component={CharactersPage} />
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  )
}

export default App
