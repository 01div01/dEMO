import React from "react";
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

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    top: 64,
    width: "calc(100% - 30px)",
    height: "calc(100% - (64px + 30px))",
    padding: 15,
    position: "absolute",
  },
  rootTextBox: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "90%",
    },
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

const PROJECTS = [];

const Settings = (props) => {
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
            <span>Projects</span>
          </Typography>
        </Grid>
        <Grid
          container
          style={{ height: "calc(100% - 50px)", padding: "15px" }}
        >
          <Grid
            xs={8}
            style={{
              display: "flex",
              flexWrap: "inherit",
              height: "100%",
              overflow: "auto",
            }}
          >
            <Grid container direction="column" item xs={12}>
              <Grid container direction="row" padding="10px">
                <Grid item xs={4}>
                  <Card className={classes.rootmedia}>
                    <CardMedia
                      className={classes.media}
                      image="/static/images/cards/paella.jpg"
                      title="Paella dish"
                    />
                  </Card>
                </Grid>
                <Grid
                  container
                  direction="row"
                  xs={8}
                  style={{ alignSelf: "center", padding: "30px" }}
                >
                  <Grid items xs={4}>
                    s
                  </Grid>
                  <Grid items xs={4}>
                    s
                  </Grid>
                  <Grid items xs={4}>
                    s
                  </Grid>
                  <Grid items xs={4}>
                    s
                  </Grid>
                </Grid>
                
              </Grid>
              <Grid>
                <h1>Description</h1>
                <form
                  className={classes.rootTextBox}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={15}
                      placeholder="Project Description"
                      variant="outlined"
                    />
                  </div>
                </form>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={4}>
            <Paper className={classes.paper2} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, null)(Settings);
