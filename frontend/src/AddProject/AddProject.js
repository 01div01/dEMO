import React, { useState,useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog(props) {
  const imageRef = useRef(null)
  const { handleSubmit, handleChange } = props;
  const [open, setOpen] = React.useState(false);

  const [projectName, setProjectName] = useState("");
  const [projectMember, setProjectMember] = useState("");
  const [project_pic, setProjectPic]=useState("");

  const updateProjectName = (e) => {
    setProjectName(e.target.value);
    console.log(projectName);
  };

  const updateProjectMember = (e) => {
    setProjectMember(e.target.value);
    console.log(projectMember);
  };
  const updateProjectPicture =(event) =>{

  /*   if(imageRef.current) */
    setProjectPic(event.target.files['0']);
    console.log(event.target.files['0']);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (type = "cancel") => {
    setOpen(false);

    if (type === "submit") {
      // perform ur operation
      
    

      handleSubmit(projectName, projectMember,project_pic);
      setProjectName("");
      setProjectMember("");
      setProjectPic("");
      
      
    }
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Project
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            label="Project Name"
            type="text"
            value={projectName}
            onChange={updateProjectName}
          />
          <TextField
            label="Project Members"
            type="text"
            value={projectMember}
            onChange={updateProjectMember}
          />
          <input
            accept="image/*"
            ref={ref=> imageRef.current = ref}
            style={{ display: "none" }}
            // value={project_pic}
            onChange={updateProjectPicture} 
            accept=".jpg, .jpeg, .png"
            onInput={updateProjectPicture}
            id="raised-button-file"
            multiple
            
            type="file"
          />
          
          
        </DialogContent>
        <DialogContent>
        
        <label htmlFor="raised-button-file">
            <Button
              variant="raised"
              component="span"
              
            >
              Upload
            </Button>
          </label>
          </DialogContent>
        {/* <DialogContent>
        <input type="file" onChange={handleChange} style={{display: 'none'}}/> 
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          

          <Button onClick={() => handleClose("submit")} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
