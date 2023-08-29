let ScoreBoard = ({ scores, xPlay }) => {
  const { xScore, oScore } = scores;
  
  return (
    <div className="flex items-center justify-evenly font-bold text-xl shadow-dark mx-auto my-8 w-60 rounded-md">
      <span className={`w-full py-3 text-center text-red-500 border-b-4 border-b-red-500 ${ !xPlay && "border-b-transparent"}`}> X - {xScore} </span>
      <span className={`w-full py-3 text-center text-blue-500 border-b-4 border-b-blue-500 ${ xPlay && "border-b-transparent"}`}> O - {oScore} </span>
    </div>
  );
}

export default ScoreBoard;