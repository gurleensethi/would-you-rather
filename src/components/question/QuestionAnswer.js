import React from "react";

class QuestionAnswer extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <div>
          <label>
            <input type="radio" name="option" value="optionOne" />
            {question.optionOne.text}
          </label>
        </div>
        <br />
        <div>
          <label>
            <input type="radio" name="option" value="optionTwo" />
            {question.optionTwo.text}
          </label>
        </div>
        <button>Submit</button>
      </div>
    );
  }
}

export default QuestionAnswer;
