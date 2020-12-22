import logo from './logo.svg';
import './App.css';
import ListMovie from './components/ListMovie/ListMovie';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './page/Home/Home';
import Detail from './page/Detail/Detail';
import Header from './components/header';
function App() {
  return (
    // so sánh prefix tiền tố
     <BrowserRouter>
      <Header/>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/listMovie" component={ListMovie} />
        <Route exact path="/detail/:id" component= {Detail}/>
       </Switch>
     </BrowserRouter>
  );
}

export default App;
