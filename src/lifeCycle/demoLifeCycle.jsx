import React, { Component } from 'react'
import Child from './Child';

export default class DemoLifeCycle extends Component {
    constructor(props){
        super(props)
        // console.log("contructor run");
        this.state = {
            count: 0,
            count1: 0,
            student: {name: "hihi"}
        }        
    }
    componentWillMount(){
        // console.log("componentWillMount");
        
    }

    render() {
        console.log("render");
        
        return (
            <div>
                <h1 className="text-center">demo lifeCycle</h1>
                <p>count: {this.state.count}</p>  
                <button type="button" class="btn btn-primary"onClick={()=>{
                    this.setState({count: this.state.count += 1})
                }}>Nhấn nút change count</button>
                <Child  name={this.state.student.name}/>
                <button type="button" class="btn btn-primary"onClick={()=>{
                    this.setState({student: {
                        ...this.state.student,
                        name: "haha"
                    }},()=>{
                        console.log(this.state.student);
                    })
                }}>Nhấn nút name</button>
            </div>
        )
    }
    componentDidMount(){
        // call api ở didmount
        console.log("componentDidMount");
    }
}
