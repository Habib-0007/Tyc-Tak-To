let Box = ({value, onClick}) => {
  
  const style = value == "X"? "text-red-500": "text-blue-500";
  
  return (
    <button className={`w-16 h-16 text-6xl bg-white font-extrabold rounded-md shadow-dark cursor-none text-center flex justify-center items-center m-2 ${style}`} onClick={onClick}> {value} </button>
  );
}

export default Box;