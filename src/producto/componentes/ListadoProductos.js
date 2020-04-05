import React from 'react';
import Producto from './Producto'

class ListadoProductos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productos: [],
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8080/productos')
        .then(res => res.json())
        .then((data) => {
          this.setState({ productos: data })
        })
        .catch(console.log)
    };

    render(){
        return(
            <>
                {this.state.productos.map((producto, row) => (
                    <Producto producto={producto} key={row}/>
                ))}
            </>
        );
    };
}

export default ListadoProductos;
