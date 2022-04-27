import React, { useState } from "react";
import "./index.scss";
import Table from "./Table";
import EnhancedTableHead from "./EnhancedTableHead";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import Checkbox from "./Checkbox";
import TableContainer from "./TableContainer";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Студенти"
  },
  {
    id: "mark1",
    numeric: true,
    disablePadding: false,
    label: "Перший семестер"
  },
  {
    id: "mark2",
    numeric: true,
    disablePadding: false,
    label: "Другий семестер"
  },
  { id: "prop", numeric: true, disablePadding: false, label: "Пропуски" },
  { id: "ispit", numeric: true, disablePadding: false, label: "Іспит" }
];

const rows = [
  createData("Акостакіоає Флоріан ", 96, 95, 3, 0),
  createData("Кравцов Олексій ", 52, 62, 20, 0),
  createData("Ляшенко Андрій ", 92, 93, 3, 0),
  createData("Мендришора Сергій ", 59, 70, 5, 0),
  createData("Нагірняк Михайло  ", 56, 53, 15, 0),
  createData("Паращук Андрій ", 58, 55, 21, 0),
  createData("Плотнікова Ольга ", 84, 87, 8, 0),
  createData("Пранничук Максим ", 85, 90, 4, 0),
  createData("Рущак Юрій ", 75, 74, 7, 0),
  createData("Савіна Елізабед ", 54, 60, 6, 0),
  createData("Сербінчук Валентин", 60, 53, 12, 0),
  createData("Скаловський Олександр ", 60, 59, 9, 0),
  createData("Соболь Андрій ", 59, 58, 15, 0.0),
  createData("Станіславський  Станіслав  ", 65, 64, 6, 0),
  createData("Ткачук Іван  ", 85, 87, 7, 0),
  createData("Топоровська Вікторія  ", 95, 84, 6, 0),
  createData("Цікал Станіслав ", 55, 52, 27, 0),
  createData("Цуркан Богдан ", 65, 53, 17, 0),
  createData("Черней Микола  ", 65, 65, 13, 0),
  createData("Штефюк Василь ", 75, 77, 7, 0)
];

function createData(name, mark1, mark2, prop, ispit) {
  return { name, mark1, mark2, prop, ispit };
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => {
    // console.log(el)
    return [el, index];
  });
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function App() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("mark");
  const [setPage] = React.useState(0);
  const [setRowsPerPage] = React.useState(5);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log("a" - "b");
  return (
    <div className="App">
      <TableContainer>
        <Table>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            headCells={headCells}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(rows, getSorting(order, orderBy)).map(
              ({ name, mark1, mark2, prop, ispit }) => (
                <TableRow key={name}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="promo-name">{name}</TableCell>
                  <TableCell>{mark1}</TableCell>
                  <TableCell>{mark2}</TableCell>
                  <TableCell>{prop}</TableCell>
                  <TableCell>{ispit}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
