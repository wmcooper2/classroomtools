import React from "react";
import "./volunteers.css";

function Controls(props) {
  return (
    <div className="row">
      <button id="reset" onClick={props.handleClick}>
        Reset
      </button>
      <button id="random" onClick={props.handleClick}>
        Random
      </button>
    </div>
  );
}

let seatID = 0;
function Seat(props) {
  return (
    <button
      className="seat"
      value="true"
      onClick={props.handleClick}
      id={seatID++}
    >
      {props.id}
    </button>
  );
}

function Row(props) {
  let row = [];
  for (let i = 0; i < 6; i++) {
    row.push(<Seat key={i} handleClick={props.handleClick} />);
  }
  return <div className="row">{row}</div>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [...Array(36).keys()]
    };
    this.click = this.click.bind(this);
    this.emptySeat = this.emptySeat.bind(this);
    this.absentBtnClick = this.absentBtnClick.bind(this);
    this.randomChoice = this.randomChoice.bind(this);
    //    this.resetBtnClick = this.resetBtnClick.bind(this);
  }

  blue = "rgba(0, 92, 211, 0.8)";
  grey = "rgba(155, 155, 155, 0.9)";
  white = "rgba(255, 255, 255, 1.0)";

  emptySeat(event) {
    let sq = document.elementFromPoint(event.clientX, event.clientY);
    if (sq.value === "true") {
      sq.style.backgroundColor = this.grey;
      sq.setAttribute("value", "false");
    } else {
      sq.style.backgroundColor = this.white;
      sq.setAttribute("value", "true");
    }
  }

  absentBtnClick(event) {
    if (this.value === "true") {
      this.style.backgroundColor = this.grey;
      this.setAttribute("value", "false");
    } else {
      this.style.backgroundColor = this.blue;
      this.setAttribute("value", "true");
    }
  }

  randomChoice() {
    let numChoice = Math.floor(Math.random() * this.state.choices.length);
    console.log("numChoice = " + numChoice);
    //    let choice = document.getElementById("seat"+ this.nums[numChoice]);
    //    choice.focus();
    //    choice.style.backgroundColor = this.grey;
    //    this.nums = [...this.nums.slice(0, numChoice), ...this.nums.slice(numChoice+1, )];
  }

  //  resetBtn.onclick = () => {
  //    for (let sq of squares){
  //      sq.setAttribute("value", "false");
  //      sq.style.backgroundColor = this.white;
  //    }
  //  }

  click(event) {
    //    console.log(event.target.id);
    if (event.target.id === "reset") {
      console.log("reset");
    } else if (event.target.id === "random") {
      this.randomChoice();
    } else {
      //      console.log(event.target.id);
      let name = document.getElementById(event.target.id);
      console.log("name = " + name);
      //      console.log(this.state.choices);
    }
  }

  render() {
    return (
      <div id="classroom">
        <Row />
        <Controls handleClick={this.click} />
      </div>
    );
  }
}

export default App;
