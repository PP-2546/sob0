import { Outlet, Link } from 'react-router-dom';
import '../App.css';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
        <li><Link to="/" className='active'>Home</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Register">Register</Link></li>
        </ul>
      </nav>
      
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

