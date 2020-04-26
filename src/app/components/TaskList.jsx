import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({ tasks, name }) => (
  <div>
    {
      tasks.map(task => (
        <div>
          <h2>
            {name}
          </h2>
          <p>
            {task.name}
          </p>
        </div>
      ))
    }
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter(task => task.group === groupID)
  }
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);