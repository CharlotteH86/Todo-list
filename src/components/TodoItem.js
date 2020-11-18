import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  getStyle = () => {
    const completed = this.props.todo.completed;
    return {
      background: "#f4f4f4",
      padding: "5px",
      borderBottom: "1px dotted #ccc",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  buttonStyle = {
    background: "red",
    padding: "10px",
    color: "white",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    float: "right",
  };

  render() {
    const id = this.props.todo.id;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markCompleted.bind(this, id)}
          />
          {this.props.todo.title}
          <button
            style={this.buttonStyle}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
