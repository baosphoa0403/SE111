import React, { Component } from 'react'
import Khanh from "../img/khanh.jpg";
import mai from "../img/mai.jpg";
import burn from "../img/burn.jpg";
import ButtonGroup from './ButtonGroup';
const data = [
    {name: "khanh", url: Khanh},
    {name: "mai", url: mai},
    {name: "burn", url: burn}
]
export default class Ex2 extends Component {
    // nhấn nút đổi img
    // cái gì thay đổi cái biến img phải bỏ zo state 
    // bắt sự kiện nút 
    // thay đổi giao diện
    // const [hello , setHello] = react.useState("hihi")
    constructor(props) {
        super(props);
        this.state = {
            img: Khanh
        };
    }
   
    handleChangeImg = (value) => {
    //   console.log(value);
      this.setState({img: value},()=>{
        console.log(this.state.img);
      })
   
      
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                          <img src={this.state.img} alt="" srcset="" style={{width: "500px", height: "500px"}}/>
                        </div>
                        <div className="col-8">
                          {/* <ButtonGroup Khanh={Khanh} mai={mai} burn={burn} handleChangeImg={this.handleChangeImg}/> */}
                          <ButtonGroup data={data} handleChangeImg={this.handleChangeImg}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
