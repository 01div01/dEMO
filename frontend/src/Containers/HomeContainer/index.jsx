import React, { useEffect, useState, useCallback } from "react";

import {
  makeStyles,
  Grid,
  Typography,
  InputBase,
  Paper,
} from "@material-ui/core";
import { connect } from "react-redux";
import { Search } from "@material-ui/icons";

import AddProject from "../../AddProject/AddProject";
import SettingsIcon from "@material-ui/icons/Settings";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    top: 64,
    width: "calc(100% - 30px)",
    height: "calc(100% - (64px + 30px))",
    padding: 15,
    position: "absolute",
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
    height: 175,
    width: "100%",
  },
  paper2: {
    height: "calc(100% - 30px)",
    width: "calc(100% - 30px)",
    margin: 15,
  },
  bottom: {
    bottom: 0,
    right: 0,
  },
}));

const PROJECTS = [];

const Home = (props) => {
  const { projects, handleSubmit, handleChange } = props;
  const [projectList, setProjectList] = useState(projects || []);
  const [showAddProject, setShowAddProject] = useState(true);
  const classes = useStyles();
  // const filteredProjects = [];
  // if(){

  // }
  console.log(projectList);
  useEffect(() => {
    setProjectList(projects);
  }, [projects]);
  const handleOnsearch = (e) => {
    let condition = e.target.value;
    console.log(condition);
    if (condition.length != 0) {
      setShowAddProject(false);
      setProjectList(
        projects.filter((item) =>
          item.projectName.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setShowAddProject(true);
      setProjectList(projects);
    }
  };

  // searchHandle(e)
  // {

  // }
  // const [projectName, setProjectName] = useState("");
  // const updateProjectName = (e) => {
  //   setProjectName(e.target.value);
  //   console.log(projectName);
  // };
  // const Search = () => {
  //   const classes = useStyles();
  //   const search = 'search';
  //   const [appState, setAppState] = useState({
  //     search: '',
  //     posts: [],
  //   });

  const history = useHistory();
  const handleOnClickNavigation = useCallback(() => history.push("/Settings"), [
    history,
  ]);

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
            <span className={classes.searchRoot}>
              <Search
                classes={{ root: classes.search }}
                style={{ color: "#808080" }}
              />
              <InputBase
                fullWidth
                type="text"
                className={classes.input}
                placeholder="Search ..."
                onChange={handleOnsearch}
              />
            </span>
          </Typography>
        </Grid>
        <Grid container style={{ height: "calc(100% - 50px)" }}>
          <Grid
            xs={8}
            style={{
              display: "flex",
              flexWrap: "inherit",
              height: "100%",
              overflow: "auto",
            }}
          >
            {projectList.map((value) => (
              <Grid
                key={0}
                item
                xs={4}
                style={{ padding: 15, borderRadius: "25px" }}
              >
                <Paper
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: "url(" + value.project_pic + ")",
                    outline: "double",
                    backgroundSize: "95% 95%",
                    backgroundRepeat: "no-repeat",
                  }}
                  className={classes.paper}
                >
                  {value.projectName}

                  <CardActions>
                    <Button
                      onClick="handleOnClickNavigation"
                      size="small"
                      style={{
                        position: "relative",
                        left: "80%",
                        top: "100px",
                      }}
                    >
                      <SettingsIcon />
                    </Button>
                  </CardActions>
                </Paper>
              </Grid>
            ))}
            <Grid
              xs={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                marginTop: "13px",
              }}
            >
              {showAddProject && (
                <Paper
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    outline: "double",
                    width: "90%",
                  }}
                  className={classes.paper}
                >
                  <AddProject
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                  />
                </Paper>
              )}
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

export default connect(mapStateToProps, null)(Home);
