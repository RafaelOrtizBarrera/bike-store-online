import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header'
import ListadoProductos from './producto/componentes/ListadoProductos'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CrearProducto from './producto/componentes/CrearProducto';




class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <Header />
                <br />
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={10}>
                            <Router>
                                <Switch>
                                    <Route exact path="/crearProducto" component={CrearProducto} />
                                    <Route exact path="/" component={ListadoProductos} />
                                </Switch>
                            </Router>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default App;
