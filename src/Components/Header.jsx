import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="App-header">
            <Container>
                <Row className="flex-box">
                    <Col md={4}>
                        <div className='header-logo'>
                            <a href="/"><img src={logo} alt="Logo" /></a>
                        </div>
                    </Col>
                    <Col md={8}>
                        <button className="menu-toggle" onClick={toggleMenu}>
                            <span></span>
                        </button>
                        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isOpen ? 'show' : 'hide'}`}>
                            <ul className="navbar-nav mr-auto">
                                <li><Link to={'/product'} className="nav-link">Products</Link></li>
                                <li><Link to={'/about'} className="nav-link"> About Us </Link></li>
                                <li><Link to={'/contactus'} className="nav-link">Contact Us</Link></li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
