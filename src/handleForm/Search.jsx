import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <>
        <input
          type="text"
          className="form-control mb-3 w-50"
          onChange={(e)=>{this.props.getKey(e.target.value)}}
        />
      </>
    );
  }
}
