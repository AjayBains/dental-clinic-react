import { List } from "@material-ui/core";
import { ListItem, ListItemText } from "@material-ui/core";
import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  footer: {
    minHeight: "60vh",
    background:
      "linear-gradient(to left,rgba(0,0,0,0.79),rgba(0,0,0,0.79)),url('caroline-lm-JiBssiZVPZA-unsplash.jpg')",
    backgroundSize: "cover",
    backGroundPosition: "center",
    backgroundRepeat: "no-repat",
    paddingBottom: "2rem",
  },
  heading: {
    display: "flex",
    color: "#71CD28",
    gap: "1rem",
    justifyContent: "center",
    marginBottom: "1.2rem",
  },
  text: {
    color: "#bdbdbd",
  },
  footerContainer: {
    paddingTop: "4.3rem",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container>
        <Grid container className={classes.footerContainer}>
          <Grid
            item
            xs={12}
            md={4}
            style={{
              textAlign: "center",
              padding: "0.6rem",
              marginBottom: "2.3rem",
              borderBottom: "1px solid #71CD28",
              borderRight: "1px solid #71CD28",
            }}
          >
            <div className={classes.heading}>
              <Avatar src="dark_logo_white_background.jpg" />

              <Typography variant="h5" component="h5">
                Dental Excellence
              </Typography>
            </div>
            <Typography varaint="body2" className={classes.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda iusto cupiditate et, totam sit cum quam quos omnis
              laborum. Officiis laboriosam minima ratione laborum. Quam,
              quisquam! Repellendus suscipit repellat quas.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ color: "#bdbdbd", textAlign: "center" }}
          >
            <Typography
              variant="h5"
              component="h5"
              style={{ color: "#71CD28" }}
            >
              Our Services
            </Typography>
            <List>
              <ListItem style={{ textAlign: "center" }}>
                <ListItemText>Dental Implants</ListItemText>
              </ListItem>
              <ListItem style={{ textAlign: "center" }}>
                <ListItemText>Braces</ListItemText>
              </ListItem>
              <ListItem style={{ textAlign: "center" }}>
                <ListItemText>Wisdom teeth</ListItemText>
              </ListItem>
              <ListItem style={{ textAlign: "center" }}>
                <ListItemText>Dental Implants</ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{
              color: "#bdbdbd",
              textAlign: "center",
              border: "1px #71CD28 solid",
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              style={{ color: "#71CD28" }}
            >
              Opening Hours
            </Typography>
            <List>
              <ListItem style={{ textAlign: "center" }}>
                <ListItemText>Monday</ListItemText>
                <ListItemText>08:00am-6:00p.m</ListItemText>
              </ListItem>
              <ListItem style={{ textAlign: "center" }}>
                <ListItemText>Tuesday</ListItemText>
                <ListItemText>08:00am-6:00p.m</ListItemText>
              </ListItem>
              <ListItem style={{ textAlign: "center" }}>
                <ListItemText>Wednesday</ListItemText>
                <ListItemText>08:00am-6:00p.m</ListItemText>
              </ListItem>
              <ListItem style={{ textAlign: "center" }}>
                <ListItemText>THursday</ListItemText>
                <ListItemText>08:00am-6:00p.m</ListItemText>
              </ListItem>
              <ListItem style={{ textAlign: "center" }}>
                <ListItemText>Friday</ListItemText>
                <ListItemText>08:00am-6:00p.m</ListItemText>
              </ListItem>
              <ListItem style={{ textAlign: "center" }}>
                <ListItemText>Sat</ListItemText>
                <ListItemText>08:00am-6:00p.m</ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
