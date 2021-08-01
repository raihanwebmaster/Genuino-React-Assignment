import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "2rem",
    display: "flex",
    padding: "16px",
  },
  searchButton: {
    marginTop: "20px",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  container: {
    width: "60%",
    margin: "auto",
    padding: "50px",
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
}));
