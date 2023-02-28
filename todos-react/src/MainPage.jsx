import { React, useState, useEffect } from 'react';
import Task from './Task';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth } from 'firebase/auth';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import Spinner from './Spinner';

export default function MainPage(props) {
  const [tasks, setTasks] = useState([]);
  const [fetchDone, setFetchDone] = useState(false);
  const auth = getAuth();
  const taskRef = doc(db, 'users', auth.currentUser.uid);

  let taskContent = '';

  useEffect(() => {
    if (!fetchDone) {
      const fetch = async () => {
        const docSnap = await getDoc(taskRef);
        docSnap
          .data()
          .tasks.map((task) => setTasks((oldTasks) => [...oldTasks, task]));
      };
      fetch();
      setFetchDone(true);
    }
  }, []);

  useEffect(() => {
    if (fetchDone) {
      updateDoc(taskRef, {
        tasks: tasks,
      })
        .then((response) => {
          // write any code here
          console.log('done');
        })
        .catch((error) => {
          toast(error.message);
        });
    }
  }, [tasks]);

  const Elements = tasks.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      taskContent={task.task}
      handleTaskComplete={() => handleTaskComplete(task.id)}
      isCompleted={task.isCompleted}
      handleTaskDelete={() => handleTaskDelete(task.id)}
    />
  ));

  function handleLogout() {
    auth.signOut();
    props.setLogin();
    toast.success('Account was logged out successfully');
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      onClick();
    }
  }

  async function onClick() {
    taskContent = document.getElementById('taskInput').value;

    const newTask = {
      task: taskContent,
      isCompleted: false,
      id: nanoid(),
    };

    if (newTask.task.trim() !== '') {
      setTasks((arr) => [...arr, newTask]);
    } else {
      toast.error('Please Enter a valid task');
    }

    document.getElementById('taskInput').value = '';
  }

  function handleTaskComplete(id) {
    setTasks((tasks) =>
      tasks.map((task) => {
        return task.id === id
          ? {
              ...task,
              isCompleted: !task.isCompleted,
            }
          : task;
      })
    );
  }

  function handleTaskDelete(id) {
    let updatedTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id !== id) {
        updatedTasks.push(tasks[i]);
      }
    }

    setTasks(updatedTasks);
    toast.success('Task was deleted successfully');
  }

  return (
    <div onKeyDown={handleKeyPress}>
      <h1 className="main-heading">What do you want to do today</h1>
      <span className="question">?</span>
      <div className="form">
        <input
          className="task-input"
          id="taskInput"
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Put your task here"
        />
        <button className="task-button" onClick={onClick}>
          WILL DO IT
        </button>
      </div>

      {tasks.length > 0 && <div className="taskbox">{Elements}</div>}

      {tasks.length == 0 && (
        <div className="no-message">
          <p>NO TASKS TO SHOW</p>{' '}
        </div>
      )}

      <button className="sign-out-button" onClick={handleLogout}>
        SIGN OUT <i className="fa-solid fa-right-from-bracket"></i>
      </button>
    </div>
  );
}
