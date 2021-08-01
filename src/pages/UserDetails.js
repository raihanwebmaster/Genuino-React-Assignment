import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    width: "80%",
    margin: "auto",
  },
  button: {
    marginBottom: "15px",
  },
  tableCell: {
    fontWeight: "600",
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "50px",
  },
});

const UserDetails = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const classes = useStyles();
  const history = useHistory();

  const loadPosts = async () => {
    const res = await axios.get(
      `https://gorest.co.in/public-api/users/${userId}`
    );
    setUser(res?.data?.data);
  };
  useEffect(() => {
    loadPosts();
  }, [user]);

  return (
    <Paper
      style={{ marginTop: 50 }}
      elevation={6}
      className={`${classes.pagination} ${classes.container}`}
    >
      <Button
        onClick={() => history.push("/")}
        className={classes.button}
        variant="outlined"
        color="secondary"
      >
        <ArrowBackIcon />
        Back
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell} align="center">
                ID No.
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Name
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Gender
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Email
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{user.id}</TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.gender}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell
                className={
                  user.status === "active" ? classes.green : classes.red
                }
                align="center"
              >
                {user.status}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UserDetails;
