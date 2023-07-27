const index = ({ children, type, color, textColor }) => {
  return (
    <button
      className={`${color} ${textColor} py-4 rounded-xl font-bold text-xl`}
      type={type}
    >
      {children}
    </button>
  );
}

export default index;