import React, { Component } from 'react'

export default class ButtonGroup extends Component {
    renderButton = () => {
        let {handleChangeImg, data} = this.props
        return data.map((item, index)=>{
            return (
                <button type="button" class="btn btn-primary d-block m-auto" key={index} onClick={()=>{handleChangeImg(item.url)}}>{item.name}</button>
            )
        })
    }
    render() {        
        console.log(this.props.data);
        
        let {Khanh, burn, mai, handleChangeImg} = this.props
        return (
            <div>
                {/* <button type="button" className="btn btn-warning d-block m-auto" onClick={()=>{handleChangeImg(Khanh)}}>Nhấn em khánh</button>
                <button type="button" className="btn btn-warning d-block m-auto" onClick={()=>{handleChangeImg(burn)}}>Nhấn em burn</button>
                <button type="button" className="btn btn-warning d-block m-auto" onClick={()=>{handleChangeImg(mai)}}>Nhấn em mai</button> */}
                {this.renderButton()}
            </div>
        )
    }
}
