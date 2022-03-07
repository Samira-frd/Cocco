function NavSquare(props) {
  const style = {
    backgroundColor: props.bgColor,
    border: "2px dashed" + props.borderColor,
    borderRadius: "5px",
    margin: "5px",
    outline: "3px solid" + props.bgColor,
  };
  return (
    <div
      style={style}
      className="w-10 h-10 flex flex-col justify-center items-center hover:shadow-lg"
    >
      <img src={props.image} alt=""/>
      <h6>{props.text}</h6>
    </div>
  );
}

export default NavSquare;
