import React, { Component } from 'react'
import {connect} from "react-redux"
class Cart extends Component {
    render() {
        return (
            <>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                               <table class="table">
                                   <thead>
                                       <tr>
                                           <th>Name</th>
                                           <th>Age</th>
                                           <th>Img</th>
                                           <th>Follower</th>
                                           <th>Day Booking</th>
                                           <th>Price</th>
                                           <th>ToTal</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                      {
                                          this.props.arrCart.map((item)=>{
                                            return (
                                                <tr>
                                                <td scope="row"></td>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                                <td><img src={item.img} className="w-50" alt="" srcset=""/></td>
                                                <td>{item.follower}</td>
                                                <td>{item.countDay}</td>
                                                <td>{(item.countDay * item.priceBooking).toLocaleString()}</td>
                                                <td><button type="button" class="btn btn-primary"onClick={()=>{
                                                    this.props.dispatch({type: "delete", payload: item})
                                                }}>Delete</button></td>
                                            </tr>
                                            )
                                          })
                                      }
                                   </tbody>
                               </table>
                            </div>
                            <div className="modal-footer">
                                <h1>Tổng tiền: 0</h1>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

                
            </>
        )
    }
}
const mapStateToProps = (state) => {
   return {
    arrCart: state.girlReducers.arrCart
   }
}
export default connect(mapStateToProps)(Cart)