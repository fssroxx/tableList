const Buttons = ({ btns }) => {
  const buttons = btns.map((item) => <button>{item.number}</button>);
  return <>{buttons}</>;
};
export default Buttons;
