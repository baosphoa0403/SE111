import React, { Component } from "react";
import {connect} from "react-redux"
 class DetailGirl extends Component {
  render() {
    // console.log(this.props.detailGirl);
    let {detailGirl} = this.props 
    return (
      <>
       {
         detailGirl &&  <div className="container">
         <div className="row">
           <div className="col-6">
             <img src={detailGirl.img} alt="" srcset="" className="w-50" />
           </div>
           <div className="col-6">
             <table class="table">
               <tbody>
                 <tr>
                   <th>Name</th>
                   <td>{detailGirl.name}</td>
                 </tr>
                 <tr>
                   <th>Age</th>
                 <td>{detailGirl.age}</td>
                 </tr>
                 <tr>
                   <th>Follower</th>
                 <td>{detailGirl.follower}</td>
                 </tr>
                 <tr>
                   <th>Price</th>
                 <td>{detailGirl.priceBooking.toLocaleString()}</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>
       }
      </>
    );
  }
}

// falsthy 0 , "", null, undefine !123
const mapStateToProps = (state) => {
  return {
     detailGirl: state.girlReducers.detailGirl
  }
}

export default connect(mapStateToProps)(DetailGirl)
