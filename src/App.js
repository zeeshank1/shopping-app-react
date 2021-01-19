// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React,{Component} from 'react';

class App extends Component {
    state = { 
        counters : [
            {id:1,value:4,selected:true},
            {id:2,value:0,selected:true},
            {id:3,value:0,selected:true},
            {id:4,value:0,selected:true}
        ]
    }

    //1st way to loop
    // render() { 
    //     return ( 
    //         <div>
    //             <Counter />
    //             <Counter />
    //             <Counter />
    //             <Counter />
    //         </div>
    //      );
    // }

    handleIncrement= (counterId) => {
        const counters = [...this.state.counters];
        counters[counterId-1].value++;//This is wrong in react - directly modifing the state 
        //console.log("on increment called",counterId," dsdsdsds    ",counters);
        // console.log(this.state.counters[0]);
        this.setState({counters});
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id!==counterId);
        console.log(">>>> ",counters);
        this.setState({counters}); 
        //console.log("Event handler called!",counterId);
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        } );
        this.setState({counters});
    };

    render(){
        return (
        <div>
            <NavBar />
            <main className="container">
            <Counters 
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
            />
            </main>
        </div>
        );
    }
}

export default App;
