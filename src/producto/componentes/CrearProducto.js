import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class CrearProducto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marca: '',
            modelo: '',
            precio: '',
            descripcionCorta: '',
            imagen: '',
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let url = 'http://127.0.0.1:8080/producto';
        console.log('bicicleta '+JSON.stringify(this.state));
        fetch('http://127.0.0.1:8080/producto', {
            method: 'POST', 
            body: JSON.stringify(this.state), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', JSON.stringify(error)))
            .then(response => console.log('Success:', JSON.stringify(response)));
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="marca">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control as="select" name="marca" onChange={this.handleChange}>
                        <option>Ingrese Marca</option>
                        <option>Trek</option>
                        <option>Commencal</option>
                        <option>Canyon</option>
                        <option>Mondraker</option>
                        <option>Yeti</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="modelo">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control type="text" name="modelo" onChange={this.handleChange} placeholder="Ingrese Modelo" />
                </Form.Group>

                <Form.Group controlId="precio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" name="precio" onChange={this.handleChange} placeholder="Ingrese Precio" />
                </Form.Group>

                <Form.File
                    id="custom-file"
                    name="imagen"
                    label="Custom file input"
                    custom
                />
                <Form.Group controlId="descripcionCorta">
                    <Form.Label>Descripción Corta</Form.Label>
                    <Form.Control as="textarea" name="descripcionCorta" onChange={this.handleChange} rows="3" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }

}

export default CrearProducto;
