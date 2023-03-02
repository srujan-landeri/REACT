import React, {useState, useEffect} from "react";
import {nanoid} from "nanoid"
import Question from "./Question";
import Menu from "./Menu";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'


export default function App(){

  const [started,setStarted] = useState(false);
  const [count,setCount] = useState(0);
  const [checked,setChecked] = useState(false);
  const [correct,setCorrect] = useState(0);
  const [questions,setQuestions] = useState([])

  // shuffling the array
  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)

  useEffect(() => {

    // a function for fetching questions from the API
    async function getQuestion(){
      const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&encode=base64')
      const data = await res.json()
      
      let q = []
      data.results.forEach(question =>{
        q.push({
          id:nanoid(),
          correct:question.correct_answer,
          selected: null,
          checked: false,
          answers:shuffleArray([...question.incorrect_answers,question.correct_answer]),
          question:question.question
        })
      })

      // set the fetched questions to the questions state
      setQuestions(q);
    }

    // calling the function
    getQuestion()
  },[count]) // runs for every change in the count state


  // change the state of start
  function start(){
    setStarted(x => !x)
  }

  // handling the check

  function handleCheck(){
    let selected = true;

    try{
      questions.forEach(question => {
        if(question.selected === null){
          selected = false
          toast.error('Attempt all the questions')
          throw 'AttempAllException'
        }
      })
    }

    catch(e){
      console.log()
    }

    if(!selected){
      return;
    }
    setQuestions(questions => questions.map(question =>{
      return {...question, checked: true}
    }))
    setChecked(true)
    let correct = 0 
    questions.forEach(question => {
      if(question.correct === question.selected){
        correct += 1
      }
    })
    setCorrect(correct)
    console.log(correct)
  }

  function handleClickAnswer(id, answer){
    setQuestions(questions => questions.map(question => {
      return question.id === id? {...question, selected: answer} : question
    }))
  }
  
  function handlePlayAgain(){
    setCount(count => count + 1)
    setChecked(false)
  }

  // Creating Question Elements if questions are present
  const quesetionElement = questions ? questions.map( question => {
    return (
      <Question
      key = {question.id}
      q = {question}
      handleClickAnswer = {handleClickAnswer}
      id = {question.id}
      />
    )
  }) : [] // if not fetched yet returns an empty array

  
  return(
    <div className="App">
      {/* if started Question page is shown else the Menu Page */}
      {started ? 
        <div className="question--page">
          {quesetionElement}
          <div className = "end--line">
            {checked && <p className = "score--text">You Scored {correct}/5</p>} <button className="check--button" onClick={checked? handlePlayAgain: handleCheck}>{checked? 'Play Again' : 'Check Answers'}</button>
          </div>
        </div>  
      : <Menu
          start = {start}
        />}


    <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  )
}