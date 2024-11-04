import logo from './logo.svg';
import './App.css';

import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      studentId: '101362082',
      name: 'Cheng Shi',
    };

  }

  render() {
    return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to Fullstack Development - 1</h1>
            <h2>React JS Programming Week09 Lab exercise</h2>
            <h3>{this.state.studentId}</h3>
            <h3>{this.state.name}</h3>
            <h4>George Brown College, Toronto</h4>
          </header>
      </div>
    )
  }
}


export default App;
