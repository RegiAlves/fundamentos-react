import React from "react";

import Produtos from "../../Data/Produtos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  function getProdutosItemLista() {
    return Produtos.map((prod) => {
      return (
        <li key={prod.id}>
          {prod.id} - {prod.nome} - R$ {prod.preco}
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Repetiçaõ</h2>
      <ul>{getProdutosItemLista()}</ul>
    </div>
  );
};
