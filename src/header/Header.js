import React from 'react';
import logo from './logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home"><img src={logo} height="80" /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link bsPrefix="nav-bike" href="/">Home</Nav.Link>
                        <Nav.Link bsPrefix="nav-bike" href="/crearProducto">Crear Producto</Nav.Link>
                        <Nav.Link bsPrefix="nav-bike" href="#pricing">Pricing</Nav.Link>
                    </Nav>

                    <Form inline>
                        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                        <Button variant="outline-light">Buscar</Button>
                    </Form>
                </Navbar>

            </>
        );
    }
}

export default Header;