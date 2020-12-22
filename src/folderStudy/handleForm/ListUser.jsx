import React, { Component } from "react";
import User from "./User";

export default class ListUser extends Component {
  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userList.map((item)=>{
                return (
                  <User item={item} handleUpdate={this.props.handleUpdate}/>
                )
            })}
          </tbody>
        </table>
      </>
    );
  }
}
