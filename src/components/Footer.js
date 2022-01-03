import React from "react";
import {Typography,Link,AppBar,Container,Toolbar} from '@mui/material/'; 
import { makeStyles } from '@mui/styles'; 

const Year = new Date().getFullYear();
const useStyles = makeStyles({
    footer:{
      margin:"auto",
    },
    app:{
        marginTop:100,
     },
  });
function Footer(){
const classes = useStyles();
return (
  <> 
  <AppBar position="static" className={classes.app}>
   <Container maxWidth="660">
    <Toolbar>
    <Typography className={classes.footer}>
  {"Copyright ©"}
      <Link color="secondary" href="https://material-ui.com/" underline="none"><b>KeeperApp</b></Link> 
  {Year} 
  </Typography>
  </Toolbar>
  </Container> 
  </AppBar>
 </>
 )
}
export default Footer;