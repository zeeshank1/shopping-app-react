import React from 'react'

//Stateless Functional Component
//Lifecycle hooks cannot be used inside SFC
const NavBar = ({totalCounter}) => {//React will pass this props object
    console.log("NavBar - Render");
    return (           
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Navbar
                <span className="badge badge-pill badge-secondary m-2">{totalCounter}</span></span>
            </div>
        </nav>
    );
}


// class NavBar extends Component {
    
//     render() { 
//     }
// }
 
export default NavBar;