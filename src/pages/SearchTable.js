import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@material-ui/core";
import { UserContext } from "../App";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useStyles from "./styles";

const SearchTable = () => {
  const [findData] = useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();
  return (
    <Paper
      style={{ marginTop: 50 }}
      className={`${classes.container} ${classes.container}`}
    >
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell} align="center">
                No.
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                Name
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {findData.length === 0 ? (
              <p style={{ textAlign: "center" }}>There is no user</p>
            ) : (
              findData?.map((user, index) => (
                <TableRow
                  onClick={() => history.push(`/users/${user.id}`)}
                  className={classes.click}
                  key={user.id}
                >
                  <TableCell component="th" scope="row" align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">{user.name}</TableCell>
                  <TableCell
                    className={
                      user.status === "active" ? classes.green : classes.red
                    }
                    align="left"
                  >
                    {user.status}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => history.push("/")}
        className={classes.button}
        variant="outlined"
        color="secondary"
      >
        <ArrowBackIcon />
        Back
      </Button>
    </Paper>
  );
};

export default SearchTable;
