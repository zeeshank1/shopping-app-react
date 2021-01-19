import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {


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
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        onDelete={ () => this.props.onDelete(counter.id)} 
                        onIncrement={() => this.props.onIncrement(counter.id)}
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