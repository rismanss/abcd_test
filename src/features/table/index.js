import React from 'react';
import { CellMeasurer, CellMeasurerCache, Grid } from 'react-virtualized';
import { tableStyle } from './styles';

const cache = new CellMeasurerCache({
  defaultWidth: 100,
  minWidth: 150,
  fixedHeight: true,
});

const Table = ({
  data,
  onScroll,
  scrollLeft,
  scrollTop,
  column,
  width,
  height,
  search,
  index,
}) => {
  const cellRenderer = ({ columnIndex, key, parent, rowIndex, style }) => {
    const isCheckedColumn = column.filter((data) => data.isChecked === true);
    const checkColumn = isCheckedColumn.filter(
      (data) => data.index === columnIndex
    ).length;
    let checkSearch =
      data[rowIndex][columnIndex] &&
      data[rowIndex][columnIndex].includes(search);

    if (checkColumn) {
      return null;
    }

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}
      >
        <div
          style={style}
          className={checkSearch && search !== '' ? 'row_search' : 'default'}
        >
          {data[rowIndex][columnIndex]}
        </div>
      </CellMeasurer>
    );
  };

  const props = {
    onScroll: onScroll,
    scrollLeft: scrollLeft,
    scrollTop: scrollTop,
    cellRenderer: cellRenderer,
    data: data,
    rowCount: data.length,
    rowHeight: 50,
    columnCount: column.length,
    columnWidth: cache.columnWidth,
    height: height || 400,
    width: width || 470,
    search: search,
    ...(index && { scrollToColumn: index.column }),
    ...(index && { scrollToRow: index.row }),
  };

  return <Grid {...props} css={tableStyle} />;
};

export default Table;
