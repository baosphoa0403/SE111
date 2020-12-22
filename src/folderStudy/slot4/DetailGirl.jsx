import React, { Component } from "react";

export default class DetailGirl extends Component {
  render() {
    // console.log(this.props.model);
    let {model} = this.props
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={model.img} alt="" className="w-50" />
            </div>
            <div className="col-6">
              <table class="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{model.name}</td>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <td>{model.age}</td>
                  </tr>
                  <tr>
                    <th>Follower</th>
                    <td>{model.follower}</td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>{model.priceBooking}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
