import {Link} from "react-router-dom";

function Navbar() {

/*   const mystyle={
    color: "red", textalign: "center", padding: "20px"
  } */
    return (
      
   <>
   
        
   <nav  >

   <Link style={{color: "green", padding: "20px"}} to="/">Home</Link> 
   <Link style={{color: "green", padding: "20px"}} to="/favourit">Favourit List</Link>
   </nav>
    </>
    );
  }
  export default Navbar;