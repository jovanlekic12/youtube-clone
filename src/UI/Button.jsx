function Button(props) {
  const { type, className, onClick, children } = props;
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
