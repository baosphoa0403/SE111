import React from "react";
export const Wrapped = Component => {
  const colors = ["success", "danger", "primary", "info"];
  const randDomColor = colors[Math.floor(Math.random() * 4)]; 
  const className =  "text-" + randDomColor ;
  return props => {
    return (
      <div className={className}>
        <Component {...props} />
      </div>
    );
  };
};
// higer order component : để mình xử lý những logic có sự giống nhau 
// khuôn recomposit
// const a  = (b) => {
//   return (c) => {
//     return  b + c
//   }
// }

// c = a (3);
// c(4)
