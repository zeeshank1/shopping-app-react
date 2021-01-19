// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React,{Component} from 'react';

class App extends Component {
  render(){
    return (
      <div>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </div>
    );
  }
}

export default App;
