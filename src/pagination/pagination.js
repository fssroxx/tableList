const Pagination = ({ btns, handleClick }) => {
  

  const buttons = btns.map((item) => <button className='btn btn-primary' onClick={() => handleClick(item.number) }>{item.number}</button>);
  return <>{buttons}</>;
};
export default Pagination;
