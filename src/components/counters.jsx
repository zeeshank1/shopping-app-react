import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
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

    //2nd way to loop with state
    // render() { 
    //     return ( 
    //         <div>
    //             {this.state.counters.map(counter => 
    //                 <Counter key={counter.id} id={counter.id} onDelete={()=>this.handleDelete(counter.id)} value={counter.value} selected={counter.selected}>
    //                     <h4>Title</h4>
    //                 </Counter>
    //                 )
    //             }
                
    //         </div>
    //      );
    // }

    //3rd way to send only single prop as counter
    render() { 
        return ( 
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        onDelete={ () => this.handleDelete(counter.id)} 
                        onIncrement={() => this.handleIncrement(counter.id)}
                        counter={counter}>
                        <h4>Title</h4>
                    </Counter>
                    )
                }
                
            </div>
         );
    }
}
 
export default Counters;