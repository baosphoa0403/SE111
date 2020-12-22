import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "./module/action/Action";
import * as ActionType from "./module/constants/ActionType";
class Detail extends Component {
  componentDidMount() {
    let  id = this.props.match.params.id;
    this.props.dispatch(Action.FetchMovieDetail(id));
  }
  render() {
    // console.log(this.props.match.params.id);
    let { detailMovie } = this.props;
    return (
      <div>
        <h1 className="text-center">Detail movie</h1>
        {detailMovie && (
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="card">
                  <img className="card-img-top" src={detailMovie.hinhAnh} alt />
                  <div className="card-body">
                    <h4 className="card-title">{detailMovie.tenPhim}</h4>
                    <p className="card-text">{detailMovie.moTa}</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Ngày chiếu</th>
                      <th>Giờ chiếu</th>
                      <th>Giá vé</th>
                      <th>thời lượng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailMovie.lichChieu.map(item => {
                      return (
                        <tr>
                          <td scope="row">{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                          <td scope="row">{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                          <td>{item.giaVe}</td>
                          <td>{item.thoiLuong}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  componentWillUnmount(){
    this.props.dispatch(Action.createAtion(ActionType.FETCH_MOVIE_DETAIL, null));
  }
}
const mapStateToProps = state => {
  return {
    detailMovie: state.detailReducer.detailMovie
  };
};
export default connect(mapStateToProps)(Detail);
