import React, { Component } from "react";

export default class Girl extends Component {
  render() {
    // console.log(this.props.item);
    let {item, handleDetail, addCart} = this.props
    return (
      <>
        <div className="card">
          <img className="card-img-top" src={item.img} alt />
          <div className="card-body">
            <h4 className="card-title">name: {item.name}</h4>
            <p className="card-text">age: {item.age}</p>
            <p className="card-text">followe: {item.follower}</p>
            <p className="card-text">priceBooking: {item.priceBooking.toLocaleString()}Đ</p>
            <button type="button" class="btn btn-primary"onClick={()=>{handleDetail(item)}}>See Detail</button>
            <button type="button" class="btn btn-secondary"onClick={()=>{addCart(item)}}>Add Booking</button>
          </div>
        </div>
      </>
    );
  }
}
