import React, {Component} from 'react';
import api from '../../services/api'; 
import './styles.css';
import {Link} from 'react-router-dom';
export default class Main extends Component{

  state={
    project:[],
  }
  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async () =>{ 
    const response = await api.get('/projeto/0');
    this.setState({project: response.data.grid});
    console.log(response.data.project)
  };
  render(){
  return (
  <div className="product-list">
    
  <div className="card-body" >
  <div className="table-responsive">
    <table className="table table-bordered" >
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Venda</th>
          <th>Cobrança</th>
          <th>V.Vendedor</th>
          <th>Q.Vendedor</th>
          <th>Acesso</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Descrição</th>
          <th>Venda</th>
          <th>Cobrança</th>
          <th>V. Vendedor</th>
          <th>Q.Vendedor</th>
          <th>Acesso</th>
        </tr>
      </tfoot>
      
      {this.state.project.map(project=> (
      <tbody  key={project.id}>
      <td>{project.descricao}</td>
      <td>{project.total_venda_prazo}</td>
      <td>{project.total_cobrado}</td>
      <td>{project.total_vales_vendedor}</td>
      <td>{project.quant_vendedores}</td>
      <Link to={`/project/${project.id}`}>Acessar</Link>
     
      </tbody>
    ))}
    </table>
  </div>
</div>
  </div>)
  }
}