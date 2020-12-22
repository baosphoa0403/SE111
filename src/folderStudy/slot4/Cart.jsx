import React, { Component } from 'react'

export default class Cart extends Component {
    calSum = () => {
        return this.props.arrCart.reduce((sum, item)=>{
             return sum += item.countDay * item.priceBooking
        }, 0)
    }
    renderItemCart = () => {
        return this.props.arrCart.map((item)=>{
             return (
            <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td><img src={item.img} alt="" className="w-50"/></td>
                <td>{item.follower}</td>
                <td>
                <button type="button" class="btn btn-primary">+</button>
                 <div>  {item.countDay}</div>
                <button type="button" class="btn btn-primary">-</button>
                </td>
                <td>{item.priceBooking.toLocaleString()}Đ</td>
                <td>{(item.countDay* item.priceBooking).toLocaleString()}Đ</td>
                <td><button type="button" class="btn btn-primary">Xoá</button></td>
            </tr>
             )
        })
    }
    render() {
        return (
            <>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document" >
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
                                           <th>Follower</th>
                                           <th>IMG</th>
                                           <th>Day Booking</th>
                                           <th>Price</th>
                                           <th>ToTal</th>
                                           <th>Chưc năng</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                      {this.renderItemCart()}
                                   </tbody>
                               </table>
                            </div>
                            <div className="modal-footer">
                                <h1>Tổng tiền: {this.calSum().toLocaleString()}Đ</h1>
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
