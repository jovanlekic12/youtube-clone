function Input(props) {
  const { type, className, placeholder, onChange } = props;

  return (
    <input
      onChange={onChange}
      type={type}
      className={className}
      placeholder={placeholder}
      required
    />
  );
}

export default Input;
