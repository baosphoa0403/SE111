import React, { Component } from "react";
import {connect} from "react-redux"
class Girl extends Component {
  render() {
    let {item, dispatch} = this.props
    return (
      <>
       <div className="card">
          <img className="card-img-top" src={item.img} alt />
          <div className="card-body">
            <h4 className="card-title">name: {item.name}</h4>
            <p className="card-text">age: {item.age}</p>
            <p className="card-text">followe: {item.follower}</p>
            <p className="card-text">priceBooking: {item.priceBooking.toLocaleString()}Đ</p>
            <button type="button" class="btn btn-primary"onClick={()=>{
              dispatch({
                type: "seeDetail",
                payload: item
              })
            }}>See Detail</button>
            <button type="button" class="btn btn-secondary"onClick={()=>{
                dispatch({
                  type: "addToCart",
                  payload: item
                })
            }}>Add Booking</button>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(Girl)
