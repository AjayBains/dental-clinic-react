import { Typography } from "@material-ui/core";
import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  section: {
    minHeight: "70vh",
    marginTop: "2.5rem",
  },
  img: {
    width: "100%",
    height: "70%",
  },
  heading: {
    marginBottom: "2rem",
  },

  descriptionText: {
    fontWeight: 100,
  },
  imgContainer: {
    display: "flex",
  },
  imgAward: {
    width: "100%",
  },
  details: {
    // marginTop: "10%",
  },
  award: {
    width: "60%",
  },
});
export default function Wecare() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.section} id="about">
        <Grid container alignItems="center" alignContent="center" spacing={5}>
          <Grid item xs={12} md={4}>
            <img src="dentist.jpg" alt="" className={classes.img} />
          </Grid>
          <Grid item xs={12} md={8} className={classes.details}>
            <Typography variant="h3" component="h3" className={classes.heading}>
              We care about your dental Health
            </Typography>
            <Typography className={classes.descriptionText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
              consectetur magni. Impedit minus ipsum ad eveniet harum voluptatum
              nobis nisi corporis, doloribus quia sequi soluta veritatis libero
              veniam sint cupiditate. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Fugit sint non dolore soluta distinctio. Dicta
              molestias at animi doloribus vero!
            </Typography>
            <div className={classes.award}>
              <Grid container>
                <Grid item xs={4}>
                  <img src="award.jpg" alt="" className={classes.imgAward} />
                  <Typography align="center" variant="subtitle1">
                    Best Service award 2019
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src="award.jpg" alt="" className={classes.imgAward} />
                  <Typography align="center" variant="subtitle1">
                    Best Service award 2020
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src="award.jpg" alt="" className={classes.imgAward} />
                  <Typography align="center" variant="subtitle1">
                    Best Service award 2021
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
