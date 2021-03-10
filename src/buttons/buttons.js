const Buttons = ({ btns }) => {
  
  return (
    btns.map((item) => <button>{item.number}</button>)
  );
};
export default Buttons;
