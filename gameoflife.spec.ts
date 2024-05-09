//	CONWAY'S GAME OF LIFE
//	Any live cell with fewer than two live neighbors dies, as if by underpopulation.
//	Any live cell with two or three live neighbors lives on to the next generation.
//	Any live cell with more than three live neighbors dies, as if by overpopulation.
//	Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
export class Cell {
  private constructor(private state: boolean) { }
  static livingCell() {
    return new Cell(true);
  }
  static deadCell() {
    return new Cell(false);
  }
  live() {
    this.state = true;
  }
  die() {
    this.state = false;
  }
  isAlive() {
    return this.state;
  }
  isDead() {
    return !this.state;
  }
}
function cellNextState(cell: Cell, nbAliveNeighbours: number): Cell {
  if (cell.isDead() && nbAliveNeighbours === 3) {
    return Cell.livingCell();
  }
  if (nbAliveNeighbours === 2 || nbAliveNeighbours === 3) {
    return cell;
  }
  return Cell.deadCell();
}
describe('Conway\'s Game of Life', () => {
  it('Any live cell with more than three live neighbors dies, as if by overpopulation.', () => {
    expect(cellNextState(Cell.livingCell(), 5)).toEqual(Cell.deadCell());
    expect(cellNextState(Cell.deadCell(), 5)).toEqual(Cell.deadCell());
  })
  it('Any live cell with fewer than two live neighbors dies, as if by underpopulation.', () => {
    expect(cellNextState(Cell.livingCell(), 1)).toEqual(Cell.deadCell());
    expect(cellNextState(Cell.deadCell(), 1)).toEqual(Cell.deadCell());
  })
  it('Any live cell with two live neighbors lives on to the next generation.', () => {
    expect(cellNextState(Cell.livingCell(), 2)).toEqual(Cell.livingCell());
    expect(cellNextState(Cell.deadCell(), 2)).toEqual(Cell.deadCell());
  })
  it('Any live cell with three live neighbors lives on to the next generation.', () => {
    expect(cellNextState(Cell.livingCell(), 3)).toEqual(Cell.livingCell());
  })
  it('Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.', () => {
    expect(cellNextState(Cell.deadCell(), 3)).toEqual(Cell.livingCell());
  })
}) 