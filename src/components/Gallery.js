import { Container, Grid } from "@material-ui/core";
import React from "react";

export default function Gallery() {
  return (
    <div style={{ minHeight: "70vh" }}>
      <Grid container style={{ marginTop: "3rem" }}>
        <Grid item xs={12} sm={6} md={3}>
          <img
            src="img1.jpg"
            alt="gallery pic of pateint"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            src="img2.jpg"
            alt="gallery pic of pateint"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            src="img3.jpg"
            alt="gallery pic of pateint"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            src="img4.jpg"
            alt="gallery pic of pateint"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
