import { Component } from 'react';
import '../index.css';

let keys = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","ENT","Z","X","C","V","B","N","M","DEL"];
let row1 = [1];
let row2 = [2];
let row3 = [3];
class Keyboard extends Component {
    constructor(props){
        super(props)
        this.state = {kbValue: ""}
    }

    keybListen = (e) => {
        let value = e.target.value;
        this.setState({ kbValue: value}, function(){
            this.props.keyChange(this.state.kbValue);
        });
        //console.log("value: "+value+" state: "+this.state.kbValue);
        //this.props.keyChange(this.state.kbValue);
        //console.log("current state: " + this.state.kbValue);
    }

    //Method below can change a complete set of words but not individual keys 
    // changeKeyColor = () =>{
    //     let guess = this.props.kValue;
    //     let color = this.props.cValue
    //     console.log("color&guess"+ guess +","+color)
    //     for(let i = 0; i< guess.length; i++){
    //         currentKey = guess[i];
    //         if(color.includes("green")){
    //            let element = document.getElementById("button-"+currentKey);
    //            element.style.backgroundColor = color;
    //         }
    //         else if(color.includes("yellow")){
    //             let element = document.getElementById("button-"+currentKey);
    //             element.style.backgroundColor = color;
    //          }
    //          else{(color.includes("gray"))
    //             let element = document.getElementById("button-"+currentKey);
    //             element.style.backgroundColor = color;
    //          }
    //     }
    // }
    // componentDidUpdate(){
    //     this.changeKeyColor();
    // }

    CreateKeyboard = () =>{
        let keyMap = keys.map((e,index) =>{
            return(
                <button id={"button-"+e} class="kbc-button kbc-button-dark" onClick={this.keybListen} key={index} value={e}>{e}</button>
            )
        });
        let rowMap = row1.map((e,i) =>{     
            return(
                <div className='row1' key={i}>{keyMap.slice(0,10)}</div>
            )
        })
        rowMap.push(row2.map((e,i) =>{
            return(<div className='row2' key={i}>{keyMap.slice(10,19)}</div>)
        }))
        rowMap.push(row3.map((e,i) =>{
            return(<div className='row3' key={i}>{keyMap.slice(19,28)}</div>)
        }))
        return rowMap;
    }

    render() {
    return(
        <div id="keyboard-cont">
            <this.CreateKeyboard/>
        </div>
    )
}}

export default Keyboard