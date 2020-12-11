import React, { Component } from 'react'
import DemoProps from './demoProps';

export default class Slot2 extends Component {
    // rendering element {} 
    str = "hôm nay đi học"
    //handle event 
    //arrow function
    // hello = () => { 
    //     // closure 1 cái hàm trả vè 1 cái hàm  khác 
    //   return () => {
    //     alert("hello bủi sáng ")
    //   }
    // }
    // hello = () => {
    //     alert("hhahah")
    // }
    // conditional rendering 
    constructor(props) {
        super(props);
        this.state = {
            isStudy: false
        };
    }
   
    bindingText = () => {
       if (this.state.isStudy) {
           return <h1>đang đi học</h1>
       }else {
           return <h1>đang đi net</h1>
       }
    }
    // state biến nằm trong cái file này thôi nó sẽ cung cấp 1 cái hàm giúp mình re-render lại giao diện
    
    changeText = () => {
    //   this.state.isStudy = true
     
      this.setState({isStudy: !this.state.isStudy},()=>{
          console.log(this.state.isStudy);
          
      })
      
    }
    str2 = "tôi là sv FPT"
    render() {
        return (
            <div>
               {/* <h1>rendering element </h1> */}
               {/* {this.str} */}
               {/* handling event */}
               {/* {this.hello()}     */}
               {/* <button type="button" class="btn btn-primary" onClick={this.hello("hello")}>Hello buổi</button> */}
               {this.bindingText()}
               <button type="button" className="btn btn-primary"onClick={this.changeText}>Change Text</button>
               <DemoProps hihi={this.str2}/>
            </div>
        )
    }
}
// 