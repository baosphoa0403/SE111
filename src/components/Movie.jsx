import React, { Component } from "react";

export default class Movie extends Component {
  handleChangePage = () => {
      this.props.haha.history.push(`/detail/${this.props.item.maPhim}`)
  }
  render() {    
    console.log(this.props.haha);
    
    let {item} = this.props
    return (
      <>
        <div className="card">
          <img className="card-img-top" src={item.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{item.tenPhim}</h4>
            <p className="card-text">{item.moTa}</p>
            <button type="button" class="btn btn-primary" onClick={()=>{this.handleChangePage()}}>See detail</button>
          </div>
        </div>
      </>
    );
  }
}
