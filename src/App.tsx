import { useEffect, useState } from "react";
import Grid from "./components/GameBoard";
import { generateGrid, GridTile } from "./utils/generate";
import { checkBoard, checkVictory } from "./utils/validate";

function App() {
  const [grid, setGrid] = useState<GridTile[][]>([]);
  const [valid, setValid] = useState(true);
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    const makeNewGame = () => {
      const initialGrid = generateGrid();
      setGrid(initialGrid);
    };

    makeNewGame();
  }, []);

  const checkGrid = () => {
    const validity = checkBoard(grid);
    if (validity) {
      const victory = checkVictory(grid);
      setVictory(victory);
    }
    setValid(validity);
  };

  return (
    <div className="flex flex-col items-center gap-y-2">
      <h1 className="mt-4 text-center text-3xl font-bold">Sudoku</h1>
      <Grid grid={grid} setGrid={setGrid} />
      <button
        onClick={() => checkGrid()}
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      >
        Check answers
      </button>
      {!valid && (
        <p className="text-2xl font-semibold text-red-600">Invalid!</p>
      )}
      {victory && valid && (
        <p className="text-2xl font-semibold text-green-700">Completed!</p>
      )}
    </div>
  );
}

export default App;
