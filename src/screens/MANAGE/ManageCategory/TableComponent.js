import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineEdit, AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { removeCategory } from "../../../redux/category/action";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableComponent = ({ headers, data, remove, onEdit }) => {
  const classes = useStyles();

  return (
    <div className="tableContainer">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map((hdr) => (
                <TableCell>{hdr}</TableCell>
              ))}
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={`${index}`}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <button onClick={() => onEdit(index, row)}>
                    <AiTwotoneEdit />
                  </button>
                  <button onClick={() => remove(row.id)}>
                    <RiDeleteBin5Line />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(removeCategory(id)),
  };
};

export default connect(null, mapDispatchToProps)(TableComponent);
