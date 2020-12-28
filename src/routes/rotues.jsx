import Home from "../page/Home/Home";
import ListMovie from "../components/ListMovie/ListMovie";
import Detail from "../page/Detail/Detail";
import SignUp from "../page/SignUp/SignUp";
import SignIn from "../page/SignIn/SignIn";

// import HOC from "./HOC";

import Dashboard from "../page/Admin/Dashboard";
import AddUser from "../page/Admin/AddUser";
import Hook from "../Hook/Hook";
import HOC from "../HOC/HOC";
// import HOOKS from "./HOOKS";
// import Material from "./pages/home/Material";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/home",
    exact: false,
    component: Home
  },
  {
    path: "/listMovie",
    exact: false,
    component: ListMovie
  },
  {
    path: "/detail/:id",
    exact: false,
    component: Detail
  },
  {
    path: "/hook",
    exact: false,
    component: Hook
  },
  {
    path: "/hoc",
    exact: false,
    component: HOC
  },
  {
    path: "/signUp",
    exact: false,
    component: SignUp
  },
  {
    path: "/signIn",
    exact: false,
    component: SignIn
  }
];

const routesAdmin = [
  {
    path: "/admin/dashboard",
    exact: false,
    component: Dashboard
  },
  {
    path: "/admin/them-nguoi-dung",
    exact: false,
    component: AddUser
  }
];

export { routesHome, routesAdmin };
