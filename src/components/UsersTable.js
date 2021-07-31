import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles({
    container:{
        width: '60%',
    },
    table: {
        minWidth: 500,
    },
    tableCell:{
        fontWeight: '600',
    },
    click: {
        cursor: 'pointer'
    },
    green:{
        color: 'green'
    },
    red:{
        color: 'red'
    }
});

const UsersTable = ({ page }) => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();
    const history = useHistory();

    const loadPosts = async () => {
        const res = await axios.get(`https://gorest.co.in/public-api/users?page=${page}`);
        setUsers(res?.data?.data);
    };
    useEffect(() => {
        loadPosts();
    }, [page]);

    return (
        <TableContainer component={Paper} className={classes.container} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell} align="center">No.</TableCell>
                        <TableCell className={classes.tableCell} align="left">Name</TableCell>
                        <TableCell className={classes.tableCell} align="left">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {users?.map((user, index) => (
                        <TableRow
                            onClick={() => history.push(`/users/${user.id}`)}
                            className={classes.click}
                            key={user.id}
                            >
                            <TableCell component="th" scope="row" align="center">{index + 1}</TableCell>
                            <TableCell align="left">{user.name}</TableCell>
                            <TableCell
                             className={user.status === 'active' ? classes.green : classes.red }
                            align="left" >{user.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;