import React from 'react';
import './Header.css'
import logo from '../../assets/images/justice logo.png'
const Header = () => {
    return (
        <header>
            <div className="backdrop">
                <nav>
                    <div className='logo'>
                        <img src={logo} alt="logo" />
                        <div className="logo-text">
                            <h3>OPEYEMI LEGAL SERVICES</h3>
                            <i>We are the best</i>
                        </div>
                    </div>
                    <div className="navbar-links">
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Contact</a>
                    </div>
                    <div className="navbar-button">
                        <button>Book An Evaluation</button>
                    </div>
                </nav>

                <div className="mt-10 w-2/4 mx-auto">
                    <h2 className='text-center text-3xl'>Stop Chasing Clients, Let’ s Bring Them To You </h2>
                    <p className='text-center py-6 desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc proin enim vitae mattis.   Habitant sit felis ut congue suspendisse pharetra a eu ultrices.
                    </p>
                    <button className='banner-button'>Claim Your Cases Here</button>
                </div>
            </div>

        </header>
    );
};

export default Header;