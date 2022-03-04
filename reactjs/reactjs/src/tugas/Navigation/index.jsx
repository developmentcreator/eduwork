import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'react-bootstrap';




const Navigation = () => {
    return (
        <div className="slidebar">
            <Navbar bg="dark" variant="dark">
                <NavbarBrand>
                    <Link to="/"><i className='fa fa-fw fa-home' ></i>Home</Link>
                    <Link to="/Form"><i className='fa fa-fw fa-form' ></i>Form</Link>
                    <Link to="/Hook"><i className='fa fa-fw fa-hook' ></i>Hook</Link>
                    <Link to="/LifecycleComponents"><i className='fa fa-fw fa-lifecycle' ></i>LifecycleComponents</Link>
                    <Link to="/Styling"><i className='fa fa-fw fa-styling' ></i>Styling</Link>
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Navigation;