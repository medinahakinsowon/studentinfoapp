import Logo from '../images/school-logo.png';
import {Link, Outlet} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Bootstrap" width="85" height="85" />
          </a>
          <Link to="/inputpanel" className='link-underline-primary' style={{fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: 'black'}}>Input-Student-Info</Link>
          <Link to="/build-student-api" className='link-underline-primary' style={{fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: 'black'}}>View-Students-Information</Link>
        </div>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Navbar;