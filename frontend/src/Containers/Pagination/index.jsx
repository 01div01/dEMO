
import * as React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  InputBase,
  Paper,
} from "@material-ui/core";
import { connect } from "react-redux";
import { Search } from "@material-ui/icons";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
// import { DataGrid } from '@material-ui/data-grid';
// import { useDemoData } from "@material-ui/x-grid-data-generator";

const useStyles = makeStyles((theme) => ({
  root: {
    top: 64,
    width: "calc(100% - 30px)",
    height: "calc(100% - (64px + 30px))",
    padding: 15,
    position: "absolute",
  },
  rootmedia: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  searchRoot: {
    height: 40,
    display: "flex",
    padding: "0 10px",
    margin: "0 15px",
    alignItems: "center",
    backgroundColor: "#F9F7F7",
    borderRadius: 50,
  },
  searchField: {
    height: 30,
    width: 30,
    padding: 5,
  },
  input: {
    fontSize: "0.875em",
  },
  paper: {
    height: 140,
    width: "100%",
  },
  paper2: {
    height: "calc(100% - 30px)",
    width: "calc(100% - 30px)",
    margin: 15,
  },
}));
// const { data } = useDemoData({
//   dataSet: "Commodity",
//   rowLength: 1000,
//   maxColumns: 6,
// });

const PROJECTS = [];

const ProjectDetails = (props) => {
  const classes = useStyles();
  const { projects } = props;
  console.log(projects);

  return (
    <div className={classes.root}>
      <Grid item style={{ height: "100%" }}>
        <Grid style={{ height: 50 }}>
          <Typography
            color="inherit"
            style={{ display: "flex", padding: "0 15px", alignItems: "center" }}
            variant="h6"
          >
            <span>Projectsss</span>
          </Typography>
        </Grid>
        <Grid
          container
          style={{ height: "calc(100% - 50px)", padding: "15px" }}
        >
          <Grid
            xs={12}
            style={{
              display: "flex",
              flexWrap: "inherit",
              height: "100%",
              overflow: "auto",
            }}
          >
            {/* <div style={{ height: 400, width: "100%" }}>
              <DataGrid pagination {...data} />
            </div> */}
            <Grid>he</Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, null)(ProjectDetails);
