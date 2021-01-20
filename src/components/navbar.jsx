import React, { Component } from 'react'

//Stateless Functional Component
const NavBar = (props) => {//React will pass this props object
    return (           
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Navbar
                <span className="badge badge-pill badge-secondary m-2">{props.totalCounter}</span></span>
            </div>
        </nav>
    );
}


// class NavBar extends Component {
    
//     render() { 
//     }
// }
 
export default NavBar;