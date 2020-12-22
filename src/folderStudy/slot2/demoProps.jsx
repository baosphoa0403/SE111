import React, { Component } from 'react'

export default class DemoProps extends Component {
    render() {
        // console.log(this.props.hihi);
        
        return (
            <div>
                <h1>Demo Props</h1>
                <h1>{this.props.hihi}</h1>
            </div>
        )
    }
}
