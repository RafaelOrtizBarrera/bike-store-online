import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Producto = (props) => {

    return (
        <>
            <Card style={{ width: '18rem', float: 'left', 'marginRight': '15px',  'marginTop': '10px', 'marginBottom': '10px'}}>
                <Card.Img variant="top" src={props.producto.urlImg} />
                <Card.Body>
                    <Card.Title>{props.producto.modelo}</Card.Title>
                    <Card.Text>
                        {props.producto.descripcion}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Producto;