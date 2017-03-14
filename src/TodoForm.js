import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/todos';
import { incId } from './actions/nextId';

const TodoForm = ({ dispatch, nextId }) => {
  let todoText;

  return (
    <div>
      <h3>Add A Todo</h3>
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          dispatch(addTodo({ name: todoText.value, complete: false, id: nextId }))
          dispatch(incId());
          todoText.value = null;
        }}
      >
        <input ref={ n => todoText = n } />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { nextId: state.nextId }
}



export default connect(mapStateToProps)(TodoForm);
