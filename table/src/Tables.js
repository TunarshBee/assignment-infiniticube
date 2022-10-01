import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import axios from "axios";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "bootstrap/dist/css/bootstrap.min.css";
import "./table.css";
import "bootstrap/dist/js/bootstrap";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchBar from "./SearchBar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tables() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [tableOrder, setTableOrder] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((e) => e.data.Data)
      .then((e) => {
        e.forEach((element) => {
          setTableOrder(element.Orders);
        });
        setData(e);
      })
      .catch((err) => console.log(err.message));
  }, []);

  console.log(tableOrder);
  return (
    <>
      <span className="filter" style={{ display: "flex" }}>
        <SearchBar style={{ width: "10px" }} />
        <FilterAltOutlinedIcon />
        <select className="select">
          <option>Filter</option>
          <option>Filter</option>
          <option>Filter</option>
        </select>
      </span>
      <TableContainer className="table" component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell component="th" scope="row">
                <input type="checkbox" name="" id="" />
              </StyledTableCell>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align="center">Date 	&#11015;</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Customer</StyledTableCell>
              <StyledTableCell align="center">Product Name</StyledTableCell>
              <StyledTableCell align="center">Revenue</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length &&
              tableOrder.map((row) => {
                return (
                  data.length &&
                  data.map((col) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        <input type="checkbox" name="" id="" />
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        #{col.Id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.created_date}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.status}
                      </StyledTableCell>

                      <StyledTableCell component="th" scope="row">
                        {col.First_name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.product_name}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.id}</StyledTableCell>
                    </StyledTableRow>
                  ))
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
