import { nanoid } from 'nanoid';
import React from 'react'

const Question = (props) => {

  console.log(props.q)
  let answers = props.q.answers;

  function handleClick(answer){
    if(props.q.checked){
      return
    }
    props.handleClickAnswer(props.id,answer)
  }

  const answerElement = answers.map(answer => {
    let id = null;

    if(props.q.checked){
      if(props.q.correct === answer){
        id = 'correct'
      }
      else if(props.q.selected === answer){
        id = 'incorrect'
      }
      else{
        id = 'not-selected'
      }
    }

    return(
      <button className = { ((props.q.checked && answer === props.q.correct)) ? 'answer correct' : answer === props.q.selected ? id === 'correct'? 'answer correct' : id === 'incorrect'? 'answer incorrect' : 'answer selected' : "answer" } key = {nanoid()} id = {id} onClick = {() => handleClick(answer)}>{atob(answer)}</button>
    )
  })

  return (
    <div>
      <h3 className='question'>{atob(props.q.question)}</h3>
      {answerElement}
    </div>
  )
}

export default Question
