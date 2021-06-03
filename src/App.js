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
import Login from './pages/user/registertion/Login';
import Register from './pages/user/registertion/Register';
function App() {




  
  return (
    <BrowserRouter>
  
      {/* router  */}

    <Route exact path="/" component={Home} />
    <Route exact path="/allmovie" component={Allmovie} />
    <Route exact path="/allmovie/:id" component={OneMovie} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
      {/* footer  */}
   <div style ={{height : 56}}></div>
      <Footer />

     </BrowserRouter>
  );
}

export default App;
