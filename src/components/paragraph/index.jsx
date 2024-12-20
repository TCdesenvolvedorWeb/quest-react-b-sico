const Paragraph = ({ color, textTransform }) => {
  return (
    <div style={{ color: color, textTransform: textTransform }}>
      <p> Este é o texto do parágrafo</p>
    </div>
  );
};

Paragraph.defaultProps = {
  color: "red",
  textTransform: "uppercase",
};

export default Paragraph;
