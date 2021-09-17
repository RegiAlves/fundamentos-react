import React from "react";
import Card from "./components/layout/Card";
import ComFilhos from "./components/basicos/ComFilhos";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

import "./App.css";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/comunicacaoDireta/Pai";
import Super from "./components/comunicacao/comunicacaoIndireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import MegaSena from "./megaSena/MegaSena";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
    <Card titulo="#11 Mega Sena" color="violet" >
      <MegaSena qtdNum={6}/>
    </Card>
    <Card titulo="#10 Contador" color="green" >
      <Contador espaco="0 5px"  passo={10} valor={0}/>
    </Card>
    <Card titulo="#9 Input" color="purple" >
      <Input/>
    </Card>
    <Card titulo="#8 Comunicação indireta" color="#000" >
      <Super />
    </Card>
    <Card titulo="#7 Comunicação direta" color="#0B99BC" >
      <Pai sobrenome="Freitas" />
    </Card>
    <Card titulo="#06 Condição V2" color="#FA6900" >
      <CondicionalComIf numero={10}/>
    </Card>
    <Card titulo="#05 Condição V1" color="#E94C6F" >
      <Condicional numero={11}/>
    </Card>
    <Card titulo="#04 Repetição" color="#542733 ">
      <Repeticao />
    </Card>
    <Card titulo="#03 Componentes com filhos" color=" #DC403B">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Amice</li>
          <li></li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="#02 Componentes com parametros" color="#8C4646 ">
      <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítitulo" />
    </Card>
    <Card titulo="#01 Primeiro Componente" color="#69D2E7  ">
      <Primeiro />
    </Card>
    </div>
  </div>
);
