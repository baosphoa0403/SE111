import React, { Component } from 'react'
import QuestionCheckBox from './QuestionCheckBox';
import QuestionInput from './QuestionInput';

export default class QuestionList extends Component {
    renderQuestion = () => {
        return this.props.data.map((item)=>{
           if (item.questionType === 1) {
               return (
                   <div className="col-6">
                       <QuestionCheckBox key = {item.id}question={item} handleCheckAnwserRadio={this.props.handleCheckAnwserRadio} />
                   </div>
               )
           }
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                 {this.renderQuestion()}
                </div>
            </div>
        )
    }
}
