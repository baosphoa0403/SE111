import React, { Component } from "react";

export default class QuestionInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {      
    let { content, answers } = this.props.question;
    let { handleCheckAnwserRadio } = this.props;
    let {value} = this.state
    return (
      <div>
        <h1>{content}</h1>
        <label htmlFor="" className="mr-3">
          Trả lơi
        </label>
        <input
          type="text"
          id="fill-in-blank-id"
          value={this.state.value}
          onChange={this.handleChange}
          onMouseLeave={()=>{
            handleCheckAnwserRadio(answers[0].content.toUpperCase().trim() === value.toUpperCase().trim())
          }}
        />
      </div>
    );
  }
}
