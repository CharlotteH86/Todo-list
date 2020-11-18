import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
//import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => this.setState({ todos: res.data }));
  }

  markCompleted = (id) => {
    //console.log("id: ", id);
    // toggle 'completed' property for todo.
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };
  //delete todo
  deleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
    //filter out the todo that is deleted
    /*const newTodos = this.state.todos.filter((todo) => {
      const isDeletedTodo = todo.id === id;
      return !isDeletedTodo;
    });

    //set state with new todos.
    this.setState({ todos: newTodos });*/
  };

  //Add todo
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markCompleted={this.markCompleted}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
