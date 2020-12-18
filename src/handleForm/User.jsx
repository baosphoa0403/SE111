import React, { Component } from "react";

export default class User extends Component {
  render() {
    let {item} = this.props
    return (
      <>
        <tr>
          <td>{item.name}</td>
          <td>{item.username}</td>
          <td>{item.email}</td>
          <td>{item.phoneNumber}</td>
          <td>{item.type}</td>
          <td>
            <button
              className="btn btn-info mr-2"
              data-toggle="modal"
              data-target="#modelIdUser"
              onClick={()=>{this.props.handleUpdate(item)}}
            >
              Edit
            </button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      </>
    );
  }
}
