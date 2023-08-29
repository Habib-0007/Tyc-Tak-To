let ResetBtn = ({resetBoard}) => {
  return (
    <button className="text-xl px-6 py-2 bg-sky-500 text-white block mx-auto my-4 rounded-lg" onClick={resetBoard}> Reset </button>
  );
}

export default ResetBtn;