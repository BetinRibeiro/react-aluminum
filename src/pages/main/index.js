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
    {this.state.project.map(project=> (
      <article  key={project.id}>
      <strong>{project.descricao}</strong>
      <p>Total da Venda {project.total_venda_prazo}</p>
      <p>Total da Cobrança {project.total_cobrado}</p>
      <Link to={`/project/${project.id}`}>Acessar</Link>
     
      </article>
    ))}
  </div>)
  }
}