const sayLabel = () => {
  alert('"A label desse botão é Baixar CV');
};

const Button = (props) => {
  return <button onClick={() => sayLabel()}> {props.label} </button>;
};

Button.defaultProps = {
  label: "Baixar CV",
}; //não precisava do default, mas eu quis praticar 😅

export default Button;
