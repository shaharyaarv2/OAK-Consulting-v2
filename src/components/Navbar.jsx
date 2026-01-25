import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        const newState = !isMenuOpen;
        setIsMenuOpen(newState);
        document.body.classList.toggle('overflow-hidden', newState);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Who We Are', href: 'whoweare' },
        {
            name: 'Our Services',
            href: 'ourservices',
        
        }
    ];

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
        setDropdownOpen(false);
    };

    const navTextColor = isScrolled ? 'text-white' : 'text-orange';
    const navTextHover = isScrolled ? 'hover:text-[#fe6700]' : 'hover:text-[#fe6700]';

    return (
        <header className="absolute top-0 w-full z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-21">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0 text-4xl text-white" onClick={closeMenu}>
                    OAK <span className='text-orange-500'>Consulting</span>
                </Link>

                {/* Hamburger */}
                <button
                    className={`lg:hidden p-2 z-[60] transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-black'}`}
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Nav */}
                <div
                    className={`
                        fixed inset-0 bg-neutral-900/95 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 h-screen
                        lg:static lg:flex lg:flex-row lg:space-y-0 lg:space-x-6 lg:bg-transparent lg:translate-x-0 lg:h-auto
                        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                    `}
                >
                    <nav>
                        <ul className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-5">
                            {menuItems.map(item => (
                                <li key={item.name} className="relative group">
                                    {!item.dropdown ? (
                                        <Link
                                            to={item.href}
                                            onClick={closeMenu}
                                            className={`text-lg font-medium transition lg:text-sm ${navTextColor} ${navTextHover} ${isScrolled ? "text-white" : "md:text-white text-white"}`}
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <>
                                            {/* Dropdown Parent */}
                                            <button
                                                className={`text-lg font-medium transition lg:text-sm ${navTextColor} ${navTextHover} ${isScrolled ? "text-white" : "md:text-white"} flex items-center`}
                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                            >
                                                {item.name}
                                                <svg
                                                    className={`w-4 h-4 ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {/* Dropdown Items */}
                                            <ul
                                                className={`
                                                    ${dropdownOpen ? 'flex' : 'hidden'}
                                                    flex-col lg:absolute lg:top-full lg:left-0
                                                    lg:bg-white lg:shadow-lg lg:rounded-lg lg:py-2
                                                    mt-3 lg:mt-2 transition-all duration-200
                                                    w-full lg:min-w-[120px]
                                                `}
                                            >
                                                {item.dropdown.map(subItem => (
                                                    <li key={subItem.name} className="w-full">
                                                        <Link
                                                            to={subItem.href}
                                                            onClick={closeMenu}
                                                            className={`
                                                                block w-full text-center lg:text-left px-5 py-2 text-sm font-medium 
                                                                ${isScrolled ? 'text-black md:text-zinc-900' : 'text-black  md:text-black'} 
                                                                hover:bg-zinc-100 lg:hover:bg-zinc-200 
                                                                transition-colors duration-150
                                                            `}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA */}
                    <Link
                        to="getintouch"
                        className={`
                            px-6 py-3 text-lg font-semibold rounded-full transition whitespace-nowrap
                            text-white  hover:bg-white hover:text-zinc-950 
                            lg:px-5 lg:py-2 lg:text-sm 
                            ${isScrolled 
                                ? ' lg:bg-transparent lg:text-white lg:hover:bg-white lg:hover:text-zinc-950' 
                                : ' lg:bg-[#FF6600] lg:text-white lg:hover:bg-white lg:hover:text-zinc-950'}
                        `}
                        onClick={closeMenu}
                    >
                        Let's Talk / Get in Touch
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
