import './App.css';
import {
  BrowserRouter , 
  Route ,

} from "react-router-dom"
import Home from './pages/home/Home';
import Allmovie from './pages/allmovies/Allmovie';
import OneMovie from './pages/onemovie/OneMovie';
import Footer from './components/Footer';
import {useEffect, useState} from "react"

function App() {




  
  return (
    <BrowserRouter>
  
      {/* router  */}

    <Route exact path="/" component={Home} />
    <Route path="/allmovie" component={Allmovie} />
    <Route path="/OneMovie" component={OneMovie} />

      {/* footer  */}
   
      <Footer />

     </BrowserRouter>
  );
}

export default App;
