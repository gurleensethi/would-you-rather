import React from "react";

class ProgressBar extends React.Component {
  render() {
    const { percentage, isSelected } = this.props;

    return (
      <div style={{ margin: "10px 0px" }}>
        <div
          style={{
            height: "20px",
            width: `${percentage}%`,
            background: `${isSelected ? "green" : "gray"}`,
            textAlign: "center",
            color: "white",
            borderRadius: "6px"
          }}
        >
          {percentage.toFixed(2)}%
        </div>
      </div>
    );
  }
}

export default ProgressBar;
