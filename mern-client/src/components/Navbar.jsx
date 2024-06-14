import React, { useState } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react'
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import { Avatar, Dropdown } from "flowbite-react";
import { useCart } from '../contects/CartContext';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const { count } = useCart();
    
    const { user, logOut } = useContext(AuthContext);
    

    //toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    //logout
    const handleLogout = () => {
        logOut().then(() => {
            // Sign-out successful.
            alert("Sign-out Successfull!!");
            navigate(from, { replace: true })
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    //navItems here
    const navItems = [
        { link: "Home", path: '/' },
        { link: "About", path: '/about' },
        { link: "Shop", path: '/shop' },
        { link: "Sell Your Book", path: '/admin/dashboard' },
        { link: "Contact Us", path: '/contact' },
        { link: <><div className="cart"><span><i className="fas fa-cart-plus"></i></span><span>{count}</span></div></>, path: '/cart'},
        {
            link: <Dropdown
                label={<Avatar alt="User settings" img={user?.photoURL || ""} rounded />}
                arrowIcon={false}
                inline
            >
                <Dropdown.Header>
                    <span className="block text-sm">{user?.displayName||<Link to="/login"><Dropdown.Item>Login</Dropdown.Item></Link>}</span>
                </Dropdown.Header>
                <div>
                    {user ? (
                        <>
                            <Link to="/admin/dashboard">
                                <Dropdown.Item>Dashboard</Dropdown.Item>
                            </Link>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                        </>
                    ) : (
                        <Link to="/sign-up">
                            <Dropdown.Item>Sign in</Dropdown.Item>
                        </Link>
                    )}
                </div>
            </Dropdown>
        },
    ]

    return (
        <header className='w-full bg-transparent fixed top-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* {logo} */}
                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block ' />BIBLIOTHECA</Link>

                    <ul className='md:flex space-x-12 hidden '>
                        {
                         navItems.map(({ link, path }) => <Link  to={path} key={path} className='block text-base
                         text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                        }
                    </ul>

                    {/* Btn for lage devices */}
                    <div className='space-x-12 hidden lg-flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                    </div>

                    {/* Menu btn for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
                            }
                        </button>
                    </div>
                </div>

                {/* Nav items for small devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base
                       text-white uppercase cursor-pointer'>{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;