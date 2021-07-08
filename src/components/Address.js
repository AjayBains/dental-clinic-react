import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/paper";
import { makeStyles } from "@material-ui/core";

import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import SpeakerPhoneOutlinedIcon from "@material-ui/icons/SpeakerPhoneOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
const useStyles = makeStyles({
  adressbar: {
    background: "#eee",
  },
  icon: {
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: ".3rem",
    color: "green",
  },

  flexb: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function Address() {
  const classes = useStyles();
  return (
    <div className={classes.adressbar}>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.flexb}>
            <RoomOutlinedIcon fontSize={"large"} className={classes.icon} />
            <div>
              <p style={{ marginBottom: "0.2px", fontSize: "1.2rem" }}>
                Hamirpur Road
              </p>
              <p style={{ color: "#9e9e9e", marginTop: 0 }}>Una</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.flexb}>
            <AccessTimeOutlinedIcon
              fontSize={"large"}
              className={classes.icon}
            />
            <div>
              <p style={{ marginBottom: "0.2px", fontSize: "1.2rem" }}>
                Opening hours
              </p>
              <p style={{ color: "#9e9e9e", marginTop: 0 }}>
                Mon-Sat-8:00am-6:00pm
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.flexb}>
            <SpeakerPhoneOutlinedIcon
              fontSize={"large"}
              className={classes.icon}
            />
            <div>
              <p style={{ marginBottom: "0.2px", fontSize: "1.2rem" }}>
                Call Us
              </p>
              <p style={{ color: "#9e9e9e", marginTop: 0 }}>+91-1234567890</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.flexb}>
            <EventOutlinedIcon fontSize={"large"} className={classes.icon} />
            <div>
              <p style={{ marginBottom: "0.2px", fontSize: "1.2rem" }}>
                Open for Appointments
              </p>
              <p style={{ color: "#9e9e9e", marginTop: 0 }}>Visit or Call us</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
