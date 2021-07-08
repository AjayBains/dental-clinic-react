import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Link, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  hero: {
    minHeight: "80vh",
    backgroundImage:
      "linear-gradient(to right, rgba(0,0,0,0.6 ),rgba(0,0,0,0.9)),url(caroline-lm-JiBssiZVPZA-unsplash.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    padding: "1.2rem",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      padding: ".5rem",
    },
  },
  smallScreen: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  tagline: {
    width: "60%",
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <Container>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          className={classes.smallScreen}
        >
          Team of highly skilled and experienced Dentists
        </Typography>
        <Typography className={classes.tagline}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          suscipit, reiciendis quam obcaecati architecto blanditiis eos fugiat
          quidem doloremque nesciunt.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1.2rem" }}
        >
          <Link href="#services" color="white" style={{ color: "white" }}>
            Read More
          </Link>
        </Button>
      </Container>
    </div>
  );
}
