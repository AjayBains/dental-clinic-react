import {
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
  Link,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
// import MenuIcon from "@material-ui/core/Menu";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root1: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
    },
  },
  title: {
    flexGrow: 1,
  },
  link: {
    fontSize: "1.2rem",
    color: "white",
    textDecoration: "none",
    transition: " all .2s",
    "&:hover": {
      textDecoration: "none",
      fontSize: "1.4rem",
      color: "#000",
    },
  },
  flex: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

export default function Menu() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar className={classes.flex}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Avatar src="dark_logo_white_background.jpg" />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Dental Excellence
            </Typography>
            <Typography className={classes.root1}>
              <Link href="#" onClick={preventDefault} className={classes.link}>
                Home
              </Link>
              <Link href="#about" className={classes.link}>
                About Us
              </Link>
              <Link href="#services" className={classes.link}>
                Services
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
