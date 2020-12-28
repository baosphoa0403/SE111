import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../components/header";

// Component HomeLayout
const HomeLayout = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
     <footer style={{backgroundColor: "black", color: "white"}}>
       footer
     </footer>
    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    // exact, path="/hoc" component=
    <Route
      {...props}
      render={propsComponent => ( // history, match, location
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
