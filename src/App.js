import React, { Component } from 'react';
import './App.css';
import Menu  from './components/Menu';
const DATA = [
  { 
    name : "Archivo",
    items : [
      { name : "Nuevo Archivo" },
      { name : "Nueva Ventana" }      
    ]
  },
  {
    name : "Editar",
    items : [
      { name : "Deshacer" },
      { name : "Rehacer" } 
    ]
  },
  {
    name : "Ver",
    items : [
      { name : "Explorador" },
      { name : "Buscador" } 
    ]
  },
  {
    name : "Ir",
    items : [ 
      { name : "Atrás" },
      { name : "Reenviar" } ]
  },
  {
    name : "Ayuda",
    items : [
       { name : "Documentación" },
       { name : "Notas de version" } 
    ]
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu  data={DATA}/>
      </div>
    );
  }
}

export default App;
