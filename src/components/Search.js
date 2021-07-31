import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Grid, AppBar, TextField, Button } from "@material-ui/core";
import useStyles from "../pages/styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
const Search = () => { 
  const [findData, setFindData] = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const history = useHistory();
  const handleClick = async () => {
    if (userName === "") {
      alert("plz put the name");
    } else {
      const data = await axios.get(
        `https://gorest.co.in/public-api/users?name=${userName}`
      );
      setFindData(data?.data?.data);
      history.push(`/users?name=${userName.split(" ").join("")}`)
    }
    
  };
  const classes = useStyles();

  return (
    <Grid>
      <AppBar
        className={classes.appBarSearch}
        position="static"
        color="inherit"
      >
        <TextField
          name="search"
          variant="outlined"
          label="Search Users"
          fullWidth
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button
          onClick={handleClick}
          className={classes.searchButton}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </AppBar>
    </Grid>
  );
};

export default Search;
