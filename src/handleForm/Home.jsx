import React, { Component } from "react";
import Search from "./Search";
import User from "./User";
import Modal from "./Modal";
import ListUser from "./ListUser";

export default class HomeSlot6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Banh duc hieu",
          username: "hieu",
          email: "hieu@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 3,
          name: "Diep quoc loc",
          username: "loc",
          email: "loc@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 5,
          name: "Ngo Quoc loc",
          username: "loc",
          email: "loc@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 4,
          name: "Tran pham gia bao",
          username: "bao",
          email: "bao@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }

      ],
      userEdit: null,
      key: ""
    };
  }
  handleUpdate = (value) => {
     console.log(value);
     this.setState({userEdit: value})
  }

  handleSubmit = (user) => {
   console.log(user);
   let userListCopy = [...this.state.userList]
   if (!user.id) {
     // add user
     user.id = Math.random();
     userListCopy = [...userListCopy, user]
     this.setState({userList: userListCopy})
   }else{// update
      const index = userListCopy.findIndex((item)=>{
          return item.id === user.id
      })
      if (index !== -1) {
         userListCopy[index] = user;
         this.setState({userList: userListCopy})
      }
   }
  }
  getKey = (value) => {
     this.setState({key: value})
  }
  render() {
    let {userList, userEdit, key} = this.state;
    userList = userList.filter((item)=>{
         return item.name.toLowerCase().indexOf(key.toLowerCase()) != -1
    })
    return (
      <div>
        <div className="container">
          <h1 className="text-center">User management</h1>
          <div className="d-flex justify-content-between align-items-center">
            <Search getKey={this.getKey}/>
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modelIdUser"
              onClick={()=>{this.setState({userEdit: null})}}
            >
              Add User
            </button>
          </div>
          <ListUser userList={userList} handleUpdate={this.handleUpdate}/>   
          <Modal handleSubmit={this.handleSubmit} userEdit={userEdit}/>
        </div>
      </div>
    );
  }
}
