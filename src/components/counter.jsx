import React, { Component } from 'react'

class Counter extends Component {
    // state = { 
    //     count : 0,
    //     tags:['tag1','tag2','tag3']
    //     // ,imageURL : 'https://picsum.photos/200'
    // };
    
    //Removed the local state 
    //State after Counters.jsx and props introduction
    // state = { 
    //     //Changes after sending complete counter object 
    //     count : this.props.counter.value, //count : this.props.value,//
    //     tags:['tag1','tag2','tag3']
    // };

    //State after Counters.jsx and props introduction
    constructor(props){
        super(props);
        console.log('This :',props);
        console.log('This :',this);
        this.props = props;
        //1. Old Way to bind this reference in case if it is missing : 
        //this.handleIncrement() = this.handleIncrement().bind(this);

        //2. Second way : to use arrow functions
        
    }
//
    // constructor(){
    //     super();
    //     console.log('This :',this);
    //     //1. Old Way to bind this reference in case if it is missing : 
    //     //this.handleIncrement() = this.handleIncrement().bind(this);

    //     //2. Second way : to use arrow functions
        
    // }

    styles = {
        fontWeight : 'bold',
        fontSize : 30// react will convert '10px'
    };
    
    render() {
        //This is after 2nd way in Counters.jsx
        console.log('Props : ',this.props);
        
        // Our Virtual DOM is a tree with React Element on the top and children under it. react put virtual DOM and DOM, compare them, it will update the DOM with the change element only
        let classes = this.formatClasses();

        //INFO : $r is the react element representation
        return (
            <React.Fragment>
                {/* <img src={this.state.imageURL} alt=''></img> */}
                {/* <span style={ this.styles } className='badge badge-primary m-2'>{this.formatCount()}</span> */}
                {/* <span style={{ fontSize:20 }} className='badge badge-warning m-2'>{this.formatCount()}</span> */}
                {/*we do not have loops like angular in JSX or If-Else statement, becoz JSX is not a templating engine*/}
                {/* {this.props.children}
                {this.renderTags()}
                {this.state.tags.length > 0 && 'Please add more elements'} */}
                {/*In javascript you can apply logical and operator between non boolean values*/}
                <br/>
                <span className={this.formatClasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counters)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            </React.Fragment>
        );
    }

    //2ND way
    // handleIncrement(){
    //     console.log('Incremental Clicked',this);
    // }

    //or 1st way
    // handleIncrement = () => {
    //     //this.props.value = 100;//Props are read-only you cannot assign a new value to it
    //     //this.state.count++;//its incrementing but react is not aware of it. to have this in React we have to use Component class's setState(), this is done automatically in angular because in angular all browser event are monkey patched, for react we have to explictly tell react what is changed.
    //     this.setState({ count: this.state.count+1 });//React will schedule a call to render() method in future and this will be an asyc call.

    //     console.log('Incremental Clicked :  ',this);
    // }

    // doHandleIncrement = () => {
    //     this.handleIncrement()
    // }

    //Removed after the controlled Component concept
    // renderTags(){
    //     if(this.state.tags.length === 0) {
    //         return <p>There are no elements</p>;
    //     }
    //     return <ul> { this.state.tags.map(tagVar =>  <li key={tagVar}>{tagVar}</li>) }</ul>
    // }

    formatClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter; 
        console.log();
        return value === 0 ? 'Zero' : value; 
        //return this.state.count === 0 ? 'Zero' : this.state.count;
    }
    // render() { 
    //     return (  
    //     <React.Fragment>
    //         <h1>Hello world from Component</h1>
    //         <button>Increment</button>
    //     </React.Fragment> 
    //     ); 
    // }
}

export default Counter;