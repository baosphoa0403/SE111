import React, { Component } from 'react'
import ListGirl from './ListGirl';
import DetailGirl from './DetailGirl';
import Cart from './Cart';
// import Cart from "./Cart";
import Burn from "./img/burn.jpg";
import khanh from "./img/khanh.jpg";
import kimAnh from "./img/kimAnh.jpg";
import mai from "./img/mai.jpg";
const data  = [
    {name: "burn", age: 20,follower: 5000, img: Burn, priceBooking: 300000000, id: 1},
    {name: "khanh", age: 19,follower: 7000, img: khanh, priceBooking: 500000000, id: 2},
    {name: "kim anh", age: 21,follower: 4000, img: kimAnh, priceBooking: 400000000, id: 3},
    {name: "mai", age: 22,follower: 6000, img: mai, priceBooking: 350000000, id: 4},
]
export default class MainSlot4 extends Component {
    state = {
        model: data[0],
        arrCart: []
    }
    handleDetail = (girl) => {
        // console.log(girl);
        this.setState({model: girl})
    }
    timViTri = (id) => { // tìm ra thì trả về index , ko thấy thì trả về  -1
      return this.state.arrCart.findIndex((item)=>{
            return item.id === id
      })
    }
    addCart= (girl) => {
    //   console.log(girl);
      const newGirl = {
          name: girl.name,
          age: girl.age,
          id: girl.id,
          follower: girl.follower,
          img: girl.img,
          priceBooking: girl.priceBooking,
          countDay: 1
      }
    //   console.log(newGirl);
      // immutable bất biến mảng vs object vì kiẻu tham chiếu 
    //   ... spread operator
      let arrCartCopy = [...this.state.arrCart]
      // tìm vị trí trong cái mảng đó ha 
      const index = this.timViTri(newGirl.id)
      
      if (index !== -1) {// th1: girl đã có rỗi giỏ hàng lấy cái dayCount++ 
          arrCartCopy[index].countDay += 1;
      }else{  // th2: girl chưa có trong giỏ hàng
          arrCartCopy.push(newGirl)
        // arrCartCopy = [...arrCartCopy, newGirl]
      }
      this.setState({arrCart: arrCartCopy}, ()=>{
          console.log(this.state.arrCart);
          
      })
    }
    render() {
        return (
            <div>   
                <div className="d-flex" style={{justifyContent: "center"}}>
                <h1>list Girl Booking For Noel</h1>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modelId">Cart(0)</button>
                </div>
                <ListGirl data={data} handleDetail={this.handleDetail} addCart={this.addCart}/>
                <DetailGirl model={this.state.model}/>
                <Cart arrCart={this.state.arrCart}/>
            </div>
        )
    }
}
