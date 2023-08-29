import Box from "./Box"

let Board = ({board, onClick}) => {
  return (
    <div className="grid grid-columns-3 place-content-center content-center">
      {board.map( (value, index)  => (
          <Box value={value} onClick={() => value===null && onClick(index)} />
        ))}
    </div>
  );
}

export default Board;