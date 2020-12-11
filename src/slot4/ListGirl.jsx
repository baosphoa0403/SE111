import React, { Component } from 'react'
import Girl from './Girl';

export default class ListGirl extends Component {
    renderGirl = () => {
        let {handleDetail, data , addCart} = this.props
        return data.map((item)=>{
            return (
                <div className="col-3">
                   <Girl item={item} handleDetail={handleDetail} addCart={addCart}/>
                </div>
            )
        })
    }
    render() {
        // console.log(this.props.data);
        return (
            <>
                <div className="container">
                     <div className="row">
                       {this.renderGirl()}
                     </div>
                </div>
            </>
        )
    }
}
