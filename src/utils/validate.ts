import { GridTile } from "./generate";

export const checkBoard = (grid: GridTile[][]) => {
  let rows: string[][] = [];
  let cols: string[][] = [];
  let blocks: string[][] = [];

  for (let i = 0; i < 9; i++) {
    rows.push([]);
    cols.push([]);
    blocks.push([]);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const tile = grid[i][j];
      const currBlock = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (tile.value != "") {
        if (
          rows[i].includes(tile.value) ||
          cols[j].includes(tile.value) ||
          blocks[currBlock].includes(tile.value)
        ) {
          return false;
        }
        rows[i].push(tile.value);
        cols[j].push(tile.value);
        blocks[currBlock].push(tile.value);
      }
    }
  }
  return true;
};

export const checkVictory = (grid: GridTile[][]) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j].value == "") {
        return false;
      }
    }
  }
  return true;
};
