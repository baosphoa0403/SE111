import logo from './logo.svg';
import './App.css';
import ListMovie from './components/ListMovie/ListMovie';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './page/Home/Home';
import Detail from './page/Detail/Detail';
import Header from './components/header';
import SignIn from './page/SignIn/SignIn';
import SignUp from './page/SignUp/SignUp';
import Admin from './page/Admin/Admin';
import { routesHome,routesAdmin } from './routes/rotues';
import HomeTemplate from "./template/HomeTemplate"
import AdminTemplate from "./template/AdminTemplate"
import HOC from './HOC/HOC';
import { AuthLogin } from './HOC/AuthLogin';
import Loading from './loading';
function App() {
  const showMenuHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showMenuAdmin = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    // so sánh prefix tiền tố
     <BrowserRouter>
      {/* <Header/> */}
      {/* <Loading/> */}
       <Switch>
          {showMenuHome(routesHome)}
          {showMenuAdmin(routesAdmin)}
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/listMovie" component={ListMovie} />
        <Route exact path="/detail/:id" component= {Detail}/>
        <AuthLogin exact path="/signIn" component= {SignIn}/>
        <Route exact path="/signUp" component= {SignUp}/>
        <Route exact path="/hoc" component={HOC}/> */}
        <Route exact path="/admin" component= {Admin}/>
       {/* <Route path="" component={PageNotFound} /> */} 
       </Switch>
     </BrowserRouter>
  );
}

export default App;
