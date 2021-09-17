import React from "react";
import { Component } from "react/cjs/react.production.min";
import ContadorDisplay from "./ContadoDisplay";
import "./Contador.css";
import ContadorBotoes from "./ContadorBotoes";
import ContadorPassos from "./ContadorPassos";

export default class Contador extends Component {
  //Ou Assim:
  state = {
    passo: this.props.passo || 1,
    valor: this.props.valor || 0,
  };

  incremento = () => {
    this.setState({
      valor: this.state.valor + this.state.passo,
    });
  };

  decremento = () => {
    this.setState({
      valor: this.state.valor - this.state.passo,
    });
  };

  mudarPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <ContadorPassos
          passo={this.state.passo}
          onPassoChange={this.mudarPasso}
        />
        <ContadorDisplay valor={this.state.valor} />
        <ContadorBotoes espaco="5px" onIncremento ={this.incremento} onDecremento={this.decremento}/>
      </div>
    );
  }
}

//Assim:

/*constructor(props) {
    super(props);
    this.state = {
      passo: props.passo,
      valor: 0,
    };
  }*/

//Assim:

/*state = {
    passo: 1,
    valor:0
  }*/
