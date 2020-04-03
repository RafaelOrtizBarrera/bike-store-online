import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header'
import ListadoProducto from './producto/componentes/ListadoProductos'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {    
        return(
            <Fragment>
                <Header />
                <br />
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={10}><ListadoProducto /></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default App;
