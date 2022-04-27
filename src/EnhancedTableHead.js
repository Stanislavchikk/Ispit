import React, { memo } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import Checkbox from "./Checkbox";
import TableSortLabel from "./TableSortLabel";

export default memo(({ headCells, onRequestSort, order, orderBy }) => {
  const createSortHandler = property => onRequestSort(property);

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Checkbox />
        </TableCell>
        {headCells.map(({ id, label }) => (
          <TableCell key={id}>
            <TableSortLabel
              active={orderBy === id}
              direction={orderBy === id ? order : "asc"}
              onClick={() => onRequestSort(id)}
            >
              {label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
});
