import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Producto = (props) => {

    return (
        <>
            <Card style={{ width: '18rem', float: 'left', 'margin-right': '15px',  'margin-top': '10px', 'margin-bottom': '10px'}}>
                <Card.Img variant="top" src="holder.js/100px180" />
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