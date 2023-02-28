import React from 'react';

export default function (props) {
  return (
    <div className="task">
      <input
        type="checkbox"
        className="checkbox"
        name="isCompleted"
        checked={props.isCompleted}
        onChange={props.handleTaskComplete}
      />
      <p className={props.isCompleted ? 'task-content strike' : 'task-content'}>
        {props.taskContent}
      </p>
      <i
        onClick={props.handleTaskDelete}
        className="fa-sharp fa-solid fa-trash icon"
      ></i>
    </div>
  );
}
