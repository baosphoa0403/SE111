import React from 'react'
import { Wrapped } from './Wrapped';
import Axios from 'axios';

 function HOC() {
    
    
    return (
        
        <>
            <h1 className="text-center">demo HOC</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure optio eum ullam, doloribus veniam necessitatibus libero modi voluptates corrupti natus debitis quam placeat quaerat, veritatis fugit cupiditate obcaecati minus!</p>
        </>
    )
}

export default Wrapped(HOC)
