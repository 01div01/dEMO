import React from "react";
import {
  Grid,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  FormControlLabel,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { NAV_MENU } from "../../configs/Constants";
import { bindActionCreators } from "redux";
import headerActions from "./headerActions";
import { ArrowDropDown, AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: `${theme.palette.primary.main}`,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
  },
  formControlLabelRoot: {
    margin: "0 15px",
  },
  formControlLabel: {
    color: "inherit",
    fontSize: "0.875em",
    position: "relative",
  },
  formControlIcon: {
    padding: "5px !important",
    color: "#FFF",
    "&:hover": {
      background: "none !important",
    },
  },
  avatarContent: {
    cursor: "pointer",
    height: "auto",
    ObjectFit: "fill",
    width: "inherit",
  },
  avatar: {
    height: 34,
    width: 34,
  },
}));

const Header = ({ history, setDrawerStatus }) => {
  const classes = useStyles();
  const getSelectedMenu = () =>
    NAV_MENU.findIndex((menu) => history.location.pathname === menu.pathName);
  const navIndex = history.location.pathname === "/" ? 0 : getSelectedMenu();

  return (
    <div className={classes.rootContainer}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Typography
              color="inherit"
              style={{ display: "flex" }}
              variant="h6"
            >
              <span className={classes.headerlabel}>
                {NAV_MENU[navIndex].label}
              </span>
            </Typography>
            <Grid item>
              <FormControlLabel
                classes={{
                  root: classes.formControlLabelRoot,
                  label: classes.formControlLabel,
                }}
                control={
                  <IconButton className={classes.formControlIcon}>
                    <ArrowDropDown />
                  </IconButton>
                }
                label={"Resources"}
                labelPlacement={"start"}
              />
              <FormControlLabel
                classes={{
                  root: classes.formControlLabelRoot,
                  label: classes.formControlLabel,
                }}
                control={
                  <IconButton className={classes.formControlIcon}>
                    <ArrowDropDown />
                  </IconButton>
                }
                label={"Support"}
                labelPlacement={"start"}
              />
              <FormControlLabel
                classes={{
                  root: classes.formControlLabelRoot,
                  label: classes.formControlLabel,
                }}
                control={
                  <IconButton className={classes.formControlIcon}>
                    <Avatar className={classes.avatar}>
                      <AccountCircle className={classes.avatarContent} />
                    </Avatar>
                  </IconButton>
                }
                label={"User Name"}
                labelPlacement={"start"}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(headerActions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
