import './App.css';
import {
  BrowserRouter , 
  Route, 
  Switch,

} from "react-router-dom"
import Home from './pages/home/Home';
import Allmovie from './pages/allmovies/Allmovie';
import OneMovie from './pages/onemovie/OneMovie';
import Footer from './components/Footer';
import {useEffect, useState} from "react"
import Login from './pages/user/registertion/Login';
import Register from './pages/user/registertion/Register';
import { isExpired, decodeToken } from "react-jwt";
function App() {
  const [user , setUser] = useState({})
  const [isLogin , setIsLogin] = useState(false)

 
  // 
  useEffect(()=> {
    loginFunction()
  } , [])

  const loginFunction = () =>{
    let token = localStorage.getItem("token")
    let decodeuser = decodeToken(token)
    if (decodeuser?.user && !isExpired(token) ){
      setUser(decodeuser.user)
      setIsLogin(true)
    } else {
      setUser({})
      setIsLogin(false)
    }
  }


  
  return (
    <BrowserRouter>
  
      {/* router  */}
    <Switch >

   
    <Route exact path="/" component={Home} />
    <Route exact path="/allmovie" component={Allmovie} />
    <Route exact path="/allmovie/:id" component={OneMovie} />
    <Route exact path="/login" 
    render={ () => <Login loginFunction={loginFunction}  />} />

    <Route exact path="/register" component={Register} />


    </Switch>
      {/* footer  */}
   <div style ={{height : 56}}></div>
      <Footer isLogin={isLogin}  loginFunction={loginFunction} />

     </BrowserRouter>
  );
}

export default App;
