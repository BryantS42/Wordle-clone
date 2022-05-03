import './App.css';
import Table from './components/table-container';
import Keyboard from './components/keyboard-container';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {kValue:"", colorValue: "", kbString: ""}
  }

  handleKBChange = (input) =>{
    this.setState({kValue: input});
    //console.log("input: " +this.state.kValue);
  }

  changeKBColor = (input) =>{
    console.log("color: "+input.color);
    this.setState({colorValue: input.color, kbString: input.kbValue});
    
  }

  render(){ 
  return (
    <div className="App" id="App">
      <Table userValue = {this.state.kValue}/>
      <Keyboard keyChange = {this.handleKBChange} cValue = {this.state.colorValue} kValue = {this.state.kbString}/>
    </div>
  );
}
}

export default App;
