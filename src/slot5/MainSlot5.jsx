import React, { Component } from 'react'
import ListGirl from './ListGirl';
import DetailGirl from './DetailGirl';
import Cart from './Cart';

export default class MainSlotRedux5 extends Component {
    render() {
        return (
            <div>
                <div className="d-flex" style={{justifyContent: "center"}}>
                <h1>list Girl Booking For Noel</h1>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modelId">Cart(0)</button>
                </div>
                <ListGirl/>
                <DetailGirl />
                <Cart/>
            </div>
        )
    }
}
