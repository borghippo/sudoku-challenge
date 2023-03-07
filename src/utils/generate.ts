export interface GridTile {
  value: string;
  editable: boolean;
  x: number;
  y: number;
}

const generateStartingState = () => {
  return [
    ["", "", "", "2", "6", "", "7", "", "1"],
    ["6", "8", "", "", "7", "", "", "9", ""],
    ["1", "9", "", "", "", "4", "5", "", ""],
    ["8", "2", "", "1", "", "", "", "4", ""],
    ["", "", "4", "6", "", "2", "9", "", ""],
    ["", "5", "", "", "", "3", "", "2", "8"],
    ["", "", "9", "3", "", "", "", "7", "4"],
    ["", "4", "", "", "5", "", "", "3", "6"],
    ["7", "", "3", "", "1", "8", "", "", ""],
  ];
};

export const generateGrid = () => {
  const startingState = generateStartingState();
  const grid: GridTile[][] = startingState.map((row, x) => {
    return row.map((tile, y) => {
      const editable = tile == "" ? true : false;
      return { value: tile, editable, x, y };
    });
  });
  return grid;
};
