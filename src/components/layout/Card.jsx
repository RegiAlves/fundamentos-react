import './Card.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
  <div className="Card" style={{
    borderColor: props.color  || '#000' ,
  }} >
    <div className="Content">{props.children}</div>
    <div className="Foolter" style={{
      backgroundColor: props.color  || '#000' ,
    }} >{props.titulo}</div>
  </div>