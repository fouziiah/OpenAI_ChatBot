import { Link } from "react-router-dom";


export default function Navbar() {
  return (
  <div >
    <div className="nav">
      <Link to="/">
        <h2>Home</h2>
      </Link>
      
      <Link to="/features">
        <h2>Features</h2>
      </Link>

      <Link to="/help">
        <h2>Help</h2>
      </Link>

      <Link to="/about">
        <h2>About</h2>
      </Link>
    </div>
     <hr />
     </div>
  );
}
