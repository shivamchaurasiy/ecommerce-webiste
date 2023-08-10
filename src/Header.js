import { Link } from 'react-router-dom'
import "./css/Header.css"
const Header = () => {
  return (
    <>
         <nav className='navbar navbar-expand-sm bg-primary'>
                <div className='container-fluid'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/'><img src='images/logo.png' width="70" height='70'/></Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link text-light" to="/about">About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link text-light" to="/services">Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link text-light" to="/contact">Contact</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link text-light" to="/signup">SignUp</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link text-light" to="/login">Login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link text-light" to="/search">Search</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    </>
  )
}

export default Header