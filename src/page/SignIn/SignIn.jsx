import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "./module/action/action"
import { ToastContainer, toast } from 'react-toastify';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: ""
    };
  }
  handleOnChane = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(Action.callAPIlogin(this.state, this.props.history))
  }
  render() {
    return (
      <>
            <ToastContainer />
        <h3 className="text-center">Đăng nhập</h3>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="container" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <span>Tài khoản</span>
                  <input
                    className="form-control"
                    name="taiKhoan"
                    onChange={this.handleOnChane}
                  />
                </div>
                <div className="form-group">
                  <span>Mật khẩu</span>
                  <input
                    className="form-control"
                    name="matKhau"
                    onChange={this.handleOnChane}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-success">
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default connect()(SignUp)
