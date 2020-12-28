import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
export const AuthLogin  =  ({component: Com, ...props}) => {
    // console.log(C);
    
    return (
      <Route
         {...props}
         render = {(propsComponent)=>{
            if (localStorage.getItem("user")) {
                return <Redirect to="/"/>
            }else{
                return <Com  {...propsComponent}/>
            }
         }}
       />    
    )
}