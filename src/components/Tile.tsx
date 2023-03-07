import { GridTile } from "../utils/generate";
import { SelectedTile } from "./GameBoard";

interface TileProps {
  state: GridTile;
  selected: SelectedTile;
  handleSelectedChange: (x: number, y: number) => void;
}

export default function Tile({
  state,
  selected: { selectedX, selectedY },
  handleSelectedChange,
}: TileProps) {
  return (
    <td className="border text-lg font-semibold first:border-l-2 first:border-l-black">
      <div
        onClick={() => handleSelectedChange(state.x, state.y)}
        className={`flex h-11 w-11 items-center justify-center text-xl hover:cursor-pointer ${
          !state.editable && "bg-gray-100 hover:cursor-default"
        } ${selectedX == state.x && selectedY == state.y && "bg-yellow-200"}
        }`}
      >
        {state.value}
      </div>
    </td>
  );
}
