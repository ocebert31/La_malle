import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import SideBarMenu from './SideBarMenu';

function Header() {
    const { token, logout } = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleLinkClick = () => {
        setShowMenu(false);
    };

    const closeConnexionAndNav = () => {
        logout();
        setShowMenu(false);
        navigate('/');
    };

    return (
        <header className='background text-white md:flex items-center justify-between p-4 shadow-md'>
            <Link to='/' className='flex justify-center' onClick={handleLinkClick}>
                <img src={logo} alt="Logo de la Malle" className='w-32 h-auto' />
            </Link>
            <nav className='text-center md:flex items-center justify-center space-x-4'>
                {token ? (
                    <button aria-label="Menu de la Malle" onClick={toggleMenu} className='text-white hover:text-primary font-semibold transition-colors duration-300 max-md:pt-5'>
                        <FontAwesomeIcon icon={faBars} className='size-6'/>
                    </button>
                ) : (
                        <div className="flex flex-row gap-2 flex-wrap xs:flex-col xs:gap-1 justify-center max-md:pt-5">
                        <Link to='/registration' className='text-white hover:text-primary font-semibold transition-colors duration-300'>Inscription</Link>
                        <Link to='/login' className='text-white hover:text-primary font-semibold transition-colors duration-300'>Connexion</Link>
                        <Link to='/services' className='text-white hover:text-primary font-semibold transition-colors duration-300'>Les préstations</Link>
                        </div>
                )}
            </nav>
            {showMenu && <SideBarMenu onClose={handleLinkClick} onLogout={closeConnexionAndNav} />}
        </header>
    );
}

export default Header;
