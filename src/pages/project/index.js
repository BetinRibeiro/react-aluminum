import React, { Component } from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';

export default class Project extends Component{
  state={
    project:{},
  }
  async componentDidMount(){
    const {id} = this.props.match.params;
    const response = await api.get(`projeto/${id}`);
    this.setState({project:response.data.grid});
    
    console.log(response.data.grid.descricao );
  }
  render(){
    const{project} = this.state;
    return(
      <div className="project-info">
      <Link to={`/`}>Retornar</Link>
        <h2>{project.descricao}</h2>
      </div>

    );
  }
}