import React from 'react';
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations';

export const TaskList = ({ tasks, name, id, createNewTask }) => (
  <div>
    {
      tasks.map(task => (
        <div key={task.id}>
          <h2>
            {name}
          </h2>
          <p>
            {task.name}
          </p>
          <button onClick={()=>createNewTask(id)}>Add New</button>
        </div>
      ))
    }
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      console.log("Creating new task...", id);
      dispatch(requestTaskCreation(id));
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter(task => task.group === groupID)
  }
};

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);