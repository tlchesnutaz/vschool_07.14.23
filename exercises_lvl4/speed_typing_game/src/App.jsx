
import React, {useEffect, useRef} from 'react'
//import Header from './components/Header'

export default function App() {
  const STARTING_TIME = 8

  const[typeBox, setTypeBox] = React.useState("")
  const[timeRemaining, setTimeRemaining] = React.useState(STARTING_TIME)
  const[isTimeRunning, setIsTimeRunning] = React.useState(false)
  const[wordCount, setWordCount] = React.useState(0)
  const inputRef = useRef(null) 

  //goal here is to update state to keep track of every change in textarea
  function handleChange(e) {
    const {value} = e.target
    setTypeBox(value)
  }
  //console.log(typeBox) //allows us to see if state is working

  //create a function that will calculate the word count
  function countWords(text) {   
  //text is a parameter so we make sure we don't mess up the actual text typed in the box
    const wordsArr = text.trim().split(" ")
  //trim() trims spaces before, after & extras so it doesn't count them as words
    //console.log(wordsArr.length)
    return  wordsArr.filter(word => word !== "").length
  //this says to only keep words that are not equal to an empty string   
  }

  function startGame() {
    setIsTimeRunning(true) //allows start game to be restarted
    setTimeRemaining(STARTING_TIME)    //resets the amount of time 
    setTypeBox("")         //resets the box so it is empty
    inputRef.current.disabled = false
    //bc it is disabled when the game is not running we need to 'manually override' that
    inputRef.current.focus() 
    //selects the dom elemnt and the focus method for it, it exists in the current property of the ref
  }

  function endGame() { //move these out of the useEffect and into their own function
    setIsTimeRunning(false) //this 'stops' the game 
    const numWords = countWords(typeBox) //this runs the countWords function on input box
    setWordCount(numWords) //this sets state of wordCount based on numWords which is based on the countWords func
    //could also be written as setWordCount(countWords(typebox)) 
  }

  //function startCountdown(seconds)
  useEffect(() => { 
    if(isTimeRunning && timeRemaining > 0) {
      //console.log(timeRemaining)
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
        //console.log(timeRemaining)
      }, 1000) //sets it to run every 1 sec
    } else if(timeRemaining === 0) {
        endGame()
    }
    //console.log(timeRemaining)
  }, [isTimeRunning, timeRemaining]) //dependencies to check for rerender

  //create a function that resets isTimeRunning to false when time runs out

  return (
    <div className="App">

      <h1>Speed Typing Game</h1>
      <h2>How fast can you type???</h2>
      <textarea 
        ref={inputRef} //allows us to use textBoxRef to access the dom element
        onChange={handleChange}
        value={typeBox} //sets value to what is in state so it is 'controlled'
        disabled={!isTimeRunning} //disables typeBox unless time is running
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame} 
        disabled={isTimeRunning} //diables start button during game 
      >
        Start
      </button> 
      <h1>Words typed:{wordCount}</h1> 

    </div>
  )  
}

//{countWords(typeBox)}

/* 
1. Create state to hold the current value of the countdown timer
2. Display this time in the "Time Remaining" header
3. Set up an effect that runs every time the `timeRemaining` changes
    The effect should wait 1 second, then decrement the `timeRemaining` by 1
    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid a lot of extra work 
    Warning: there will be a bug in this, but we'll tackle that next
4. Make it so the effect won't run if the time is already at 0
5. Make it so clicking the Start button starts the timer instead of it starting on refresh
    Hint: use a new state variable to indicate if the game should be running or not
6. When the timer reaches 0, count the number of words the user typed 
    and display it in the "Word count" section
7. After the game ends, make it so the user can click the Start button to play a second time 
8. Create a constant STARTING_TIME (convention has these all in caps)
9. Make the typeBox have focus (DOM elements have a method called .focus()) when the game starts    

10. Move the "business logic" into a custom hook, which will provide any parts of state 
      and any functions to this component to use. You can easily tell which parts the component 
      needs by looking at the variables being used inside the `return`ed markup.
11. Make the start time a variable the user can input
*/

