import React from "react";

export default function ContadorBotoes(props) {
  return (
    <div>
      <button style={{margin: props.espaco,}} onClick={props.onIncremento}>+</button>
      <button onClick={props.onDecremento}>-</button>
    </div>
  );
}
