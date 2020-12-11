import React, { Component } from "react";

export default class QuestionCheckBox extends Component {
  renderAnser = () => {
    let { answers } = this.props.question;
    let { handleCheckAnwserRadio } = this.props;
    return answers.map(item => {
      return (
        <div>
          <input
            type="radio"
            key={item.id}
            name={item.id}
            value={item.exact}
            className="mr-3"
            onClick={() => {
              handleCheckAnwserRadio(item.exact);
            }}
          />
          <label>{item.content}</label>
        </div>
      );
    });
  };
  render() {
    let { id, content } = this.props.question;
    return (
      <div>
        <h1>
          STT({id}) Câu hỏi: {content}{" "}
        </h1>
        {this.renderAnser()}
      </div>
    );
  }
}
