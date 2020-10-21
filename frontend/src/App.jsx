import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import HeaderContainer from "./Containers/HeaderContainer";
import HomeContainer from "./Containers/HomeContainer";
import { Component } from "react";
import Create from "./Component/admin/create";
import Edit from "./Component/admin/edit";
import Delete from "./Component/admin/delete";
import SettingsContainer from "./Containers/SettingsContainer";
import axios from "axios";
import ProjectDetails from "./Containers/Pagination";

// Setting Theme for an application
export const DEFAULT_THEME = createMuiTheme({
  palette: {
    primary: {
      main: "#DC004E",
    },
    secondary: {
      main: "#1976D2",
    },
  },
});

// class connectionexp extends React.Component{
//   componentDidMount(){
//     const apiUrl='http://127.0.0.1:8000/api/'
//     fetch(apiUrl)
//     .then((response)=>response.json())
//     .then((data)=> console.log(data));
//   }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
      projectDetails: {
        id: null,
        projectName: "",
        projectMember: "",
      },
      editing: false,
    };
    this.fetchProject = this.fetchProject.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }
  //************************************************************************************************************ */
  componentWillMount() {
    this.fetchProject();
  }

  fetchProject() {
    console.log("fetching..");
    fetch("http://127.0.0.1:8000/api/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          projectList: data,
        })
      );
  }

  handleChange(projectName, projectMember) {
    this.setState({
      projectDetails: {
        ...this.state.projectDetails,
        projectName: projectName,
        projectMember: projectMember,
      },
    });

    return;

    // this.setState({
    //   projectDetails: {
    //     ...this.state.projectDetails,
    //     projectName: value,
    //   },
    // });
  }

  handleSubmit(projectName, projectMember, project_pic) {
    let projectFormData = new FormData();

    projectFormData.append("projectName", projectName);
    projectFormData.append("projectMembers", projectMember);
    projectFormData.append("project_pic", project_pic);

    let projectData = {
      projectName: projectName,
      projectMembers: projectMember,
      // project_pic:project_pic,
    };
    console.log(projectData);
    //const {projectName:namevalue , projectMember:membervalue}=e
    console.log("ITEM", projectData);
    const url = "http://127.0.0.1:8000/api/create/";
    /*  fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: projectFormData,
    }) */
    axios
      .post(url, projectFormData, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((Response) => {
        this.fetchProject();
        /* this.setState({
          projectDetails: {
            projectName:projectName,
            projectMember:projectMember,
            
          },
        }); */
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
  }
  searchHandler(e) {}

  render() {
    return (
      <MuiThemeProvider theme={DEFAULT_THEME}>
        <HeaderContainer />
        <Switch>
          <Route exact path="/Home">
            <Route exact path="/admin/create" Component={Create} />
            <Route exact path="/admin/edit/:id" Component={Edit} />
            <Route exact path="/admin/delete/:id" Component={Delete} />

            <HomeContainer
              projects={this.state.projectList}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Route>
          <Route exact path="/Settings">
            <SettingsContainer projects={this.state.projectList} />
          </Route>

          <Route exact path="/ProjectDetails">
            <ProjectDetails projects ={this.state.projectList}/>
          </Route>
          <Redirect exact from="/" to="/Home" />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

//   //*********************************************************************************************************** */

export default App;
