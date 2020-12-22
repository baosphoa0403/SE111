import React, { Component, PureComponent } from 'react'

export default class Child extends PureComponent {
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps);
    // }
    // shouldComponentUpdate(nextProps){
    //     if (nextProps.count1 != this.props.count1) {
    //         return true;
    //     }
    //     return false
    // }
    render() {
        console.log("Child Component");
        return (
            <div>
                <h1>child component</h1>
                 <p>count of child: {this.props.name}</p>
            </div>
        )
    }
}
