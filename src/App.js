import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    toDos: [],
    newThing: { thingToDo: '', done: false }
  };

  change = event => {
    this.setState({ newThing: { thingToDo: event.target.value, done: false } });
  };

  addHandler = () => {
    let newToDos = [...this.state.toDos];
    newToDos.push(this.state.newThing);
    this.setState({
      toDos: newToDos,
      newThing: { thingToDo: '', done: false }
    });
  };

  deleteHandler = index => {
    let newToDos = [...this.state.toDos];
    newToDos.splice(index, 1);
    this.setState({
      toDos: newToDos
    });
  };

  doneHandler = index => {
    let newToDos = [...this.state.toDos];
    newToDos[index].done = true;
    this.setState({
      toDos: newToDos
    });
  };

  render() {
    const list = (
      <div>
        {this.state.toDos.map((toDo, index) => {
          if (toDo.done) {
            return (
              <div key={index} className="ToDoDone">
                <button
                  className="Delete"
                  onClick={() => this.deleteHandler(index)}
                >
                  delete
                </button>
                {toDo.thingToDo}
              </div>
            );
          } else {
            return (
              <div key={index} className="ToDo">
                <button
                  className="Done"
                  onClick={() => this.doneHandler(index)}
                >
                  done
                </button>
                <button
                  className="Delete"
                  onClick={() => this.deleteHandler(index)}
                >
                  delete
                </button>
                {toDo.thingToDo}
              </div>
            );
          }
        })}
      </div>
    );
    const inputValue = this.state.newThing.thingToDo;
    return (
      <div className="App">
        <p className="Title">To Do List</p>
        <p className="Note">Enter a new thing to do</p>
        <input
          type="text"
          className="InputBox"
          value={inputValue}
          onChange={this.change}
        />
        <button className="Add" onClick={this.addHandler}>
          Add
        </button>
        <div>{list}</div>
      </div>
    );
  }
}

export default App;
