import { Container, Paper, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles, Avatar } from "@material-ui/core";
import React from "react";
import { IconContext } from "react-icons";
import { FaLaptopMedical } from "react-icons/fa";

const useStyles = makeStyles({
  services: {
    background: "#EFF2F4",
    minHeight: "100vh",
    paddingTop: "2.6rem",
  },
  item: {
    display: "flex",
    gap: "1rem",
    columnGap: "1.3rem",
  },
  icon: {
    background: "white",
    padding: ".7rem",
    borderRadius: "50%",
    transition: "all .2s",
  },
});

export default function OurServices() {
  const classes = useStyles();
  return (
    <IconContext.Provider value={{ color: "#71CD29", size: "4rem" }}>
      <div className={classes.services} id="services">
        <Typography
          variant="h2"
          component="h3"
          align="center"
          style={{ marginBottom: "5rem" }}
        >
          Our Services
        </Typography>
        <Container>
          <Grid container spacing={3} style={{ rowGap: "4rem" }}>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.item}>
                <div className="icon">
                  <FaLaptopMedical />
                </div>
                <div className={classes.itemText}>
                  <Typography variant="h5" component="h5" gutterBottom>
                    Crown Bridges
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, quis!
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.item}>
                <div className="icon">
                  <FaLaptopMedical />
                </div>
                <div className={classes.itemText}>
                  <Typography variant="h5" component="h5" gutterBottom>
                    Implants
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    voila is ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, quis!
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.item}>
                <div className="icon">
                  <FaLaptopMedical />
                </div>
                <div className={classes.itemText}>
                  <Typography variant="h5" component="h5" gutterBottom>
                    Teeth Whitening
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Teeth whitening Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Odio, quis!
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.item}>
                <div className="icon">
                  <FaLaptopMedical />
                </div>
                <div className={classes.itemText}>
                  <Typography variant="h5" component="h5" gutterBottom>
                    Root Canals
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Root canals Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Odio, quis!
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.item}>
                <div className="icon">
                  <FaLaptopMedical />
                </div>
                <div className={classes.itemText}>
                  <Typography variant="h5" component="h5" gutterBottom>
                    Wisdom teeth
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    wisdom teeth Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Odio, quis!
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.item}>
                <div className="icon">
                  <FaLaptopMedical />
                </div>
                <div className={classes.itemText}>
                  <Typography variant="h5" component="h5" gutterBottom>
                    Braces
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Braces are Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Odio, quis!
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </IconContext.Provider>
  );
}
