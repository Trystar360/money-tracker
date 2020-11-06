import './App.css';
import React from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';



const siteTitle = "Money Tracker";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "primary"
  },
  hero: {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem"
  }
}));


function App() {

  const classes = useStyles();
  //const theme = useTheme();
  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            {siteTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero} >
          <Box>{siteTitle}</Box>
      </Box>
    </div>
  );
}

export default App;
