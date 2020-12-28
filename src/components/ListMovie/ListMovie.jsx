import React, { Component } from "react";

import { connect } from "react-redux";
import * as Action from "./module/action/actions";
// import * as ActionType from "./module/constants/constants";
import Movie from "../Movie";
import { ToastContainer } from "react-toastify";
import { Wrapped } from "../../HOC/Wrapped";
class ListMovie extends Component {
  
  
  componentDidMount() {
    // Axios({
    //   url:
    //     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET"
    // })
    //   .then(res => {
    //     //response
    //     //   console.log(res.data);
    //     this.props.dispatch(
    //       Action.createAtion(ActionType.FETCH_LIST_MOVIE, res.data)
    //     );
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    this.props.dispatch(Action.FetchListMovie)
}
  render() {
    console.log(this.props);
    
    return (
      <div>
        <h1 className="text-center">List Movie</h1>
        <div className="container">
          <div className="row">
            {this.props.listMovie.map(item => {
              return (
                <div className="col-3">
                  <Movie item={item} haha={this.props} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listMovie: state.movieReducers.listMovie
  };
};
// const mapDispatchToProps = (dispatch) => {
//      return {
//          fetchList: () => {
//              dispatch(Action.FetchListMovie)
//          }
//      }
// }
export default Wrapped(connect(mapStateToProps)(ListMovie));
