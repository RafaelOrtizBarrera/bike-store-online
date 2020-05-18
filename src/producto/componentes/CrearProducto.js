import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class CrearProducto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marca: '',
            modelo: '',
            precio: '',
            descripcionCorta: '',
            imagen: null
        }

        this.fileInput = React.createRef();
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        console.log('name ' + name + ' value ' + value);
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let url = 'http://127.0.0.1:8080/api/v1/productos';

        let fileImg = this.fileInput.current.files[0];

        let formData = new FormData();
        formData.append('marca', this.state.marca);
        formData.append('modelo', this.state.modelo);
        formData.append('precio', this.state.precio);
        formData.append('descripcionCorta', this.state.descripcionCorta);
        formData.append('imagen', fileImg);
        axios({
            url: url,
            method: 'POST',
            data: formData
        }).then(res => {
            console.log(res);
            console.log(res.data);
        });


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

                <div className="mb-3">
                    <Form.File id="formcheck-api-regular">
                        <Form.File.Label>Subir Imagen</Form.File.Label>
                        <Form.File.Input name="imagen" ref={this.fileInput}/>
                    </Form.File>
                </div>
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
