function Square(props) {
  const style = {
    backgroundColor: props.bgColor,
    border: "2px dashed" + props.borderColor,
    borderRadius: "10px",
    margin: "20px",
    outline: "3px solid" + props.bgColor,
  };

  return (
    <div
      style={style}
      className="w-40 h-40 flex flex-col justify-center items-center hover:shadow-lg"
    >
      <img src={props.image} alt="category" className="max-h-28" />
      <h6>{props.text}</h6>
    </div>
  );
}

export default Square;
