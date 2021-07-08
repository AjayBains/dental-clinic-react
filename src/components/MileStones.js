import { Grid, makeStyles } from "@material-ui/core";
import { FaTooth } from "react-icons/fa";
import React from "react";
import { IconContext } from "react-icons";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { GiTooth, GiSaberTooth } from "react-icons/gi";
const useStyles = makeStyles({
  milestones: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  milestonesBox: {
    background:
      "linear-gradient( to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(caroline-lm-JiBssiZVPZA-unsplash.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "6rem",
    paddingBottom: "6rem",
    width: "100%",
    color: "white",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 500,
    paddingBottom: 0,
  },
});

export default function MileStones() {
  const classes = useStyles();
  return (
    <IconContext.Provider value={{ color: "#71CD29", size: "4em" }}>
      <section className={classes.milestones}>
        <div className={classes.milestonesBox}>
          <Container>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
                <FaTooth />
                <Typography className={classes.heading}>200</Typography>
                <Typography variant="body2">Xrays</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
                <GiTooth />

                <Typography className={classes.heading}>2K</Typography>
                <Typography variant="body2">Root canals</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
                <FaTooth />
                <Typography className={classes.heading}>7k</Typography>
                <Typography variant="body2">Extractions</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
                <FaTooth />
                <Typography className={classes.heading}>11K</Typography>
                <Typography variant="body2">Satisifed Patients</Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
    </IconContext.Provider>
  );
}
