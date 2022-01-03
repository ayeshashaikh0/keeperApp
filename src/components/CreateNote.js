import React from "react";
import {useState} from "react";
import {TextField,Paper,Button} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    form: {
      position:"relative",
      margin:"auto",
      marginTop:30,
    },
    add:{
     position:"absolute",
      marginLeft:500,
      marginBottom:-55,
      
    },
  });
function CreateNote(props){
const classes = useStyles();
const [note,setNote]=useState({title:"",content:""});
const FetchInput=(event)=>{
const {name,value}=event.target;
setNote((prevData)=>{
return {...prevData,[name]:value,}
});
}
const AddNote=()=>{
props.AddedNote(note);
}
 return <>
  <Paper className={classes.form} sx={{ p: '80px 2px',  width: 300, height:100 }}>
  <TextField sx={{marginTop:-8}} onChange={FetchInput} name="title" value={note.title} label="Title" variant="standard" color="primary" fullWidth/>
  <TextField  sx={{marginTop:-2}} onChange={FetchInput} name="content"value={note.content} label="Content" multiline rows={3} defaultValue="Write your title Content..." fullWidth/>
  <Button onClick={AddNote}><AddIcon className={classes.add}></AddIcon></Button>
  </Paper>
 </>
}
export default CreateNote;