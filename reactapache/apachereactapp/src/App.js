import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    fetch('http://35.224.112.224/api/todos/')
      .then(response => response.json())
      .then(json =>
        this.setState({
          todos: json
        }))
  }
  render() {
    // return this.state.todos.map((res) => (
    //   <div className="card-columns mt-5 ml-5">
    //     <div className="card border-success mb-3 inner-card">
    //       <div className="card-header bg-transparent border-success">{res.title}</div>
    //        <div className="card-body text-success">
    //         <p className="card-text">{res.description}</p>
    //        </div>
    //     </div>
    //   </div>
    // ))
    return <div className="card-columns mt-5">
      {this.state.todos.map((res) => (

        <div className="card border-dark mb-3 inner-card  " key={res.id}>
          <div className="card-header bg-transparent border-dark text-success">{res.title}</div>
          <div className="card-body">
            <p className="card-text">{res.description}</p>
          </div>
        </div>))}
    </div>

  }
}

export default App;
