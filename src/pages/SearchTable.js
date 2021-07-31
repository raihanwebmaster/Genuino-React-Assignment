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
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../App";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  container: {
    width: "60%",
    margin: "auto",
  },
  table: {
    minWidth: 500,
  },
  button: {
    marginTop: "15px",
  },
  tableCell: {
    fontWeight: "600",
  },
  click: {
    cursor: "pointer",
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
});

const SearchTable = () => {
  const [findData] = useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.container}>
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
              <p style={{textAlign: 'center'}}>There is no user</p>
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
    </Box>
  );
};

export default SearchTable;
