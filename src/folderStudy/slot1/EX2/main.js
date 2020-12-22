import React, { Component } from 'react'
import Header from './header/header';
import Footer from './footer/footer';
import LeftContent from './leftContent/leftContent';
import RightContent from './rightContent/rightContent';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <LeftContent />
                    <RightContent />
                </div>
                <Footer />
            </div>
        )
    }
}
