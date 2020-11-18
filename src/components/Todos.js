import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    const todoElements = this.props.todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          markCompleted={this.props.markCompleted}
          deleteTodo={this.props.deleteTodo}
        />
      );
    });
    return todoElements;
  }
}

//Prototypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todos;
