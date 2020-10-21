import React from "react";
import { Home as HomeIcon, Description, Assessment } from "@material-ui/icons";


export const NAV_MENU = [
  {
    label: "Home",
    pathName: "/Home",
    icon: <HomeIcon />,
  },
  {
    label: "Settings",
    pathName: "/Settings",
    icon: <Description />,
  },
  {
    label: "Report",
    pathName: "/Report",
    icon: <Assessment />,
  },
  {
    label: "Project Details",
    pathName: "/ProjectDetails",
    icon: <Assessment />,
  },
 
];
