import React from 'react';
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button,setButton ] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
           setButton(false)
        }else{setButton(true)}

    };


    useEffect(() => {showButton();
    }, [])   

    window.addEventListener('resize',showButton);
    


    return ( <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo " onClick={closeMobileMenu}>

                {button &&  <Button buttonStyle='btn--outline'>TRVL</Button>} <i className='fab fa-typo3'></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ?'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onclick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/Services' className='nav-links' onclick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Products' className='nav-links' onclick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onclick={closeMobileMenu}>
                            sign-up
                        </Link>
                    </li>
                </ul>

                  {button &&  <Button buttonStyle='btn--outline'>SIGN-UP</Button>}

            </div>
        </nav>
        </>
    );
}

export default Navbar;
