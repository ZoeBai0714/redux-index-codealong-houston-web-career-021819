import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodosContainer extends Component {

  render() {
      console.log(this.props)
    return(
      <div>{this.props.todos.map (item => <Todo text = {item}/>)}</div>
    );
  }
};


const mapStateToProps = state =>{
    return {todos: state.todos}
}
export default connect(mapStateToProps)(TodosContainer);