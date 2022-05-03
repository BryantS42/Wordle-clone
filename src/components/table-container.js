import React, { Component } from 'react';
import '../index.css';
import {Vocab} from './Words';
import Confetti from 'react-confetti'

let count = 0;
let rowsLeft = 6;
let boxcont = [1,2,3,4,5];
let rowcont = [1,2,3,4,5,6];
let currentbox = "";
let currentRow = "";
let solution = Vocab[Math.floor(Math.random() * Vocab.length)];
let guess = "";

class Table extends Component{                     
    constructor(props){
        super(props)
        this.state = {kbValue: "", color: "", confettiTime: false}
    }

    newLetter = () =>{
        
        if(document.getElementsByClassName("row")[6-rowsLeft] == null){ 
            return;
        }
        if(count === 5 && this.props.userValue === "ENT" && rowsLeft > 0){
            this.checkGuess();
            
            count = 0;
            rowsLeft--;
            return;
        }
        if(this.props.userValue === "DEL" && !(count===0)){
            count --;
            guess = guess.substring(0,count);
            currentbox = currentRow.children[count];
            currentbox.textContent = "";
        }
        if(!(this.props.userValue === "DEL" || this.props.userValue === "ENT")){
        currentRow = document.getElementsByClassName("row")[6-rowsLeft];
        currentbox = currentRow.children[count]; 
        currentbox.textContent = this.props.userValue;
        guess = guess.concat(this.props.userValue);
        console.log("count: "+count);
        console.log("solution: "+solution);
        count ++; 
        }
    }

    CreateBoxes = () =>{
        let newboxes =boxcont.map((e,index) => {
            return (
             <div className='box' key={index}></div>)
            });
        let newRows = rowcont.map((e,i) => {
            return (<div className ="row" key={i}>{newboxes}</div>)
        })
            return newRows;
    }

    componentDidUpdate(){
        this.newLetter();
    }

    reloadBoard = () =>{
        window.location.reload();
    }

    checkGuess = () =>{
        console.log("Guess: "+guess);

        if(guess.includes(solution)){                                   //Turn all boxes green.  "Win condition"
            console.log("Correct!");
            for(let i = 0; i< 5; i++){
            currentRow.children[i].style.backgroundColor = "green";
            }
            this.setState({confettiTime:true});
            //this.kbColorChange(guess,"green");
        }
        else{
            for(let i = 0; i < solution.length; i++){
                if(guess[i] === solution[i]){                           //turn current box green
                    currentRow.children[i].style.backgroundColor = "green";
                }
                else if(solution.includes(guess[i])){                   //turn current box yellow
                    currentRow.children[i].style.backgroundColor = "yellow";
                }
                else{                                                   //turn current box gray
                    currentRow.children[i].style.backgroundColor = "gray"; 
                }
            }
        }
        guess = "";
    }

    // kbColorChange = (currentGuess, currColor) =>{    Keyboard color change method isn't complete
    //     console.log("current guess:"+currentGuess)
    //     this.setState({ kbValue: currentGuess, color: currColor}, function(){
    //         this.props.changeKBColor(this.state);
    //     });
    // }

    render(){  
    return(
        <div>
            <h1>Wordle</h1>
            <div className="board">
                <this.CreateBoxes/>
            </div>
            <Confetti run = {this.state.confettiTime} tweenDuration={1000}/>
        </div>        
    )
}
}

export default Table