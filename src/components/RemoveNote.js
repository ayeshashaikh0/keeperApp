import React from "react";
import {Button,Grid} from '@mui/material/';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({ 
    clear:{
        margin:"auto",
        marginTop:300,
        marginLeft:580,
       },
});

function RemoveNote(props){
const classes=useStyles();
return <>
<Grid container spacing={2}>
  <Grid item xs={8}>
    <div><Button onClick={props.deleteItem} variant="contained" className={classes.clear}><ClearAllIcon/>Clear All</Button></div>
  </Grid>
</Grid>
  </>
}
export default RemoveNote;