import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {
   render() {
      return this.props.todos.map( (todo) => 
      <TodoItem key={todo.id} todo={todo}  markCompleted ={this.props.markCompleted}  deleteTodo={this.props.deleteTodo} />
      );
   }
}

Todos.propTypes = {
   todos : PropTypes.array.isRequired
}

export default Todos