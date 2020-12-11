import React, { Component } from 'react'
import Navbar from './navbar';
import Carousel from './carousel';
import Card from './card';

export default class Main2 extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Carousel />
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    }
}
