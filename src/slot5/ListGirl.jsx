import React, { Component } from 'react'
import Girl from './Girl';
import {connect} from "react-redux"
class ListGirl extends Component {
    render() {
        // console.log(this.props.data);
        
        return (
            <>
                <div className="container">
                     <div className="row">
                         {this.props.data.map((item)=>{
                             return (
                                <div className="col-3">
                                <Girl item={item}/>
                                </div>       
                             )
                         })}
                     </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
     return {
        data: state.girlReducers.data
     }
}

export default connect(mapStateToProps)(ListGirl)
