import React from 'react'
import {Link} from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import SearchIcon from '@material-ui/icons/Search'
import Sidebar from './Sidebar'
import Search from './Input'
import './Navbar.css'

function Navbar() {
    return (
    
    <nav className='nav__items'>
                <Sidebar/>
                {/* Navbar Logo__Text */}
                <Link to='/'><img src='/Images/amazon-logo-black.jpg' alt='Amazon' /></Link>
                {/* Nav__searchInput */}
                <div className='nav__inputIcon'>
                <Search/>
                <SearchIcon className='nav__icon'/>
                </div>

            
            <div className='nav__links'>
            {/* 1st Link */} 
             <Link to='/' className='navLink'>
                <div className='navItems'>
                    <span className='navItem1'>Place Your</span>
                    <span className='navItem2'>Order</span>
                </div>
             </Link>

             {/* 2nd Link */}
             <Link to='/' className='navLink'>
                <div className='navItems'>
                    <span className='navItem1'>Your</span>
                    <span className='navItem2'>Prime</span>
                </div>
             </Link>
             {/* 3rd Link */}
             <Link to='/' className='navLink'>
                <div className='BasketIcon'>
                    <span className='navIcon'><ShoppingBasketIcon/></span>
                    <span className='basketCount'>0</span>
                </div>
             </Link>
             
            </div>
        
    </nav>
    )
}

export default Navbar
