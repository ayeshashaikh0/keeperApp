import React from "react";
import {TextField,Paper,Button} from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PublishIcon from '@mui/icons-material/Publish';
import { useState } from "react";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    form: {
      position:"relative",
      marginTop:110,
      marginLeft:20,
      float:"left",    
    },
    delete:{
      marginLeft:255,
      marginBottom:10,    
    },
    text:{
     marginTop:10,  
    },
    field:{
    marginTop:-50,
    },
    edit:{
       marginLeft:190, 
       marginTop:-82
    },
    publish:{
      marginLeft:223,
      marginTop:-123,
    }
   
  });
 function Note(props){
 const classes = useStyles();
 const [field,setfield]=useState(true);
 const [text,settext]=useState({title:props.title,content:props.content});
 const deleteNote=()=>{
 props.onDelete(props.id);
 }
 const publish=()=>{
   const object={id:props.id,title:text.title,content:text.content};
   props.onPublish(object);
 }

 console.log(text.title,text.content)
  return <>
  <Paper className={classes.form} sx={{ p: '80px 2px',  width: 300, height:100 }}>
  <TextField className={classes.field} value={text.title} onChange={(e) => settext({...text, title:e.target.value})} name="title"  label="Title" variant="standard" color="primary"  fullWidth inputProps={{ readOnly:field, }} />
  <TextField className={classes.text} value={text.content} onChange={(e) => settext({...text, content:e.target.value})} name="content" label="Content" multiline rows={3} defaultValue="Write your title Content..." fullWidth inputProps={{ readOnly:field, }}/>
  <Button onClick={deleteNote}><DeleteIcon className={classes.delete}></DeleteIcon></Button>
  <Button onClick={()=>{setfield(false)}}><EditIcon className={classes.edit}></EditIcon></Button>
  <Button onClick={publish,()=>{setfield(true)}}><PublishIcon  className={classes.publish}></PublishIcon></Button>
  </Paper>
  </>;
 }
 export default Note;