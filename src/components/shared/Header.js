import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/banner.png';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(result => {
      console.log(result);
    })
    .catch(error => console.log(error))
  };

    return (
        <Navbar
  fluid={true}
  rounded={true}
>
  <Link to='/'>
  <Navbar.Brand>
    <img
      src={logo}
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Wild with Harry
    </span>
  </Navbar.Brand></Link>
  <Navbar.Toggle />
  <Navbar.Collapse>
  <Link to='/'>
  <Navbar.Link>
      Home
    </Navbar.Link>
  </Link>
  <Link to='/services'>
  <Navbar.Link>
      Services
    </Navbar.Link>
  </Link>
{
  user?.email ? <>
  <Link to='/reviews'>
  <Navbar.Link>
     My Reviews
    </Navbar.Link>
  </Link>
  <Link to='/add'>
  <Navbar.Link>
      Add
    </Navbar.Link>
  </Link></> : <></>
}
  <Link to='/blog'>
  <Navbar.Link>
      Blog
    </Navbar.Link>
  </Link>
{
  user?.email ? <><button onClick={handleLogOut} className='bg-red-600 py-1 px-2 text-white rounded-md'>Logout</button></> : <> <Link to='/login'>
  <Navbar.Link>
      Login
    </Navbar.Link>
  </Link>
  <Link to='/register'>
  <Navbar.Link>
      Register
    </Navbar.Link>
  </Link></>
}

  </Navbar.Collapse>
</Navbar>
    );
};

export default Header;