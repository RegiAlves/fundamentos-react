import React, { useState } from 'react';

export default function MegaSena(props){

    
    const [num, setNum] = useState(Array(props.qtdNum).fill(0));


    function gerarNumNaoContido(array){
      const min = 1;
      const max = 60;
      const novoNumero = parseInt(Math.random() * (max - min)) + min
      return array.includes(novoNumero) 
        ? gerarNumNaoContido(array) : novoNumero
      
    }

    function gerarNumeros (){
     const novoArray = Array(props.qtdNum)
        .fill(0)
        .reduce(a =>{
          return [...a, gerarNumNaoContido(a)]
         } , [])
        .sort((a,b) => a - b)
        setNum(novoArray);
    }
  

  return(
    <div>
      <h2>Números da Mega Sena</h2>
      <div>
        {num.join(' ')}
        <div>
        <button onClick={gerarNumeros} >Obter número</button>
        </div>
       
      </div>
    </div>
  );

} 
