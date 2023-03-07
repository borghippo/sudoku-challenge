import { useState } from "react";
import { GridTile } from "../utils/generate";
import SelectButton from "./SelectButton";
import Tile from "./Tile";

interface GameBoardProps {
  grid: GridTile[][];
  setGrid: React.Dispatch<React.SetStateAction<GridTile[][]>>;
}

export interface SelectedTile {
  selectedX: number;
  selectedY: number;
}

export default function GameBoard({ grid, setGrid }: GameBoardProps) {
  const [selected, setSelected] = useState<SelectedTile>({
    selectedX: 0,
    selectedY: 0,
  });

  const handleSelectedChange = (x: number, y: number) => {
    if (grid[x][y].editable) {
      setSelected({ selectedX: x, selectedY: y });
    }
  };

  const handleTileChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newValue = e.currentTarget.value;
    setGrid((prev) => {
      const newGrid = [...prev];
      newGrid[selected.selectedX][selected.selectedY].value = newValue;
      return newGrid;
    });
  };

  return (
    <div className="flex flex-col items-center gap-x-2 gap-y-2 sm:flex-row sm:gap-y-0">
      <table>
        <tbody>
          {grid.map((row, i) => (
            <tr
              key={i}
              className="border-black first:border-t-2 last:border-b-2"
            >
              {row.map((tile, j) => (
                <Tile
                  key={j}
                  state={tile}
                  selected={selected}
                  handleSelectedChange={handleSelectedChange}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex w-64 flex-wrap items-center justify-center gap-x-1 gap-y-1 sm:w-auto sm:flex-col sm:flex-nowrap sm:gap-x-0">
        <SelectButton
          name={"0"}
          value={"0"}
          handleTileChange={handleTileChange}
        />
        <SelectButton
          name={"1"}
          value={"1"}
          handleTileChange={handleTileChange}
        />
        <SelectButton
          name={"2"}
          value={"2"}
          handleTileChange={handleTileChange}
        />
        <SelectButton
          name={"3"}
          value={"3"}
          handleTileChange={handleTileChange}
        />
        <SelectButton
          name={"4"}
          value={"4"}
          handleTileChange={handleTileChange}
        />
        <SelectButton
          name={"5"}
          value={"5"}
          handleTileChange={handleTileChange}
        />
        <SelectButton
          name={"6"}
          value={"6"}
          handleTileChange={handleTileChange}
        />
        <SelectButton
          name={"7"}
          value={"7"}
          handleTileChange={handleTileChange}
        />
        <SelectButton
          name={"8"}
          value={"8"}
          handleTileChange={handleTileChange}
        />
        <SelectButton
          name={"9"}
          value={"9"}
          handleTileChange={handleTileChange}
        />
        <SelectButton
          name={"X"}
          value={""}
          handleTileChange={handleTileChange}
        />
      </div>
    </div>
  );
}
