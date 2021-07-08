import { CardContent, Typography } from "@material-ui/core";
import { Card, CardActionArea, Avatar } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";

export default function Testimonials() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div>
      <Typography
        variant="h2"
        component="h3"
        align="center"
        style={{ marginBottom: "3rem" }}
      >
        Testimonials
      </Typography>
      <Carousel breakPoints={breakPoints}>
        <Card style={{ textAlign: "center" }}>
          <CardActionArea>
            <Avatar src="patient.jpg" style={{ margin: "auto" }}></Avatar>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Abhay
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                rem atque, blanditiis labore doloremque fugiat eligendi! Quasi
                labore illum quibusdam dolore officia corrupti, sapiente
                doloribus quia, impedit laborum, assumenda voluptatem illo
                harum? Tempora assumenda fugiat, nemo unde perspiciatis ullam
                officiis maxime rerum iste dolorem ut iure aliquam ducimus
                perferendis laboriosam!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={{ textAlign: "center" }}>
          <CardActionArea>
            <Avatar src="patient.jpg" style={{ margin: "auto" }}></Avatar>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Raman
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                rem atque, blanditiis labore doloremque fugiat eligendi! Quasi
                labore illum quibusdam dolore officia corrupti, sapiente
                doloribus quia, impedit laborum, assumenda voluptatem illo
                harum? Tempora assumenda fugiat, nemo unde perspiciatis ullam
                officiis maxime rerum iste dolorem ut iure aliquam ducimus
                perferendis laboriosam!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={{ textAlign: "center" }}>
          <CardActionArea>
            <Avatar src="patient.jpg" style={{ margin: "auto" }}></Avatar>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Divendar
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                rem atque, blanditiis labore doloremque fugiat eligendi! Quasi
                labore illum quibusdam dolore officia corrupti, sapiente
                doloribus quia, impedit laborum, assumenda voluptatem illo
                harum? Tempora assumenda fugiat, nemo unde perspiciatis ullam
                officiis maxime rerum iste dolorem ut iure aliquam ducimus
                perferendis laboriosam!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={{ textAlign: "center" }}>
          <CardActionArea>
            <Avatar src="patient.jpg" style={{ margin: "auto" }}></Avatar>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Dheeraj
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                rem atque, blanditiis labore doloremque fugiat eligendi! Quasi
                labore illum quibusdam dolore officia corrupti, sapiente
                doloribus quia, impedit laborum, assumenda voluptatem illo
                harum? Tempora assumenda fugiat, nemo unde perspiciatis ullam
                officiis maxime rerum iste dolorem ut iure aliquam ducimus
                perferendis laboriosam!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={{ textAlign: "center" }}>
          <CardActionArea>
            <Avatar src="patient.jpg" style={{ margin: "auto" }}></Avatar>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Abhay
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                rem atque, blanditiis labore doloremque fugiat eligendi! Quasi
                labore illum quibusdam dolore officia corrupti, sapiente
                doloribus quia, impedit laborum, assumenda voluptatem illo
                harum? Tempora assumenda fugiat, nemo unde perspiciatis ullam
                officiis maxime rerum iste dolorem ut iure aliquam ducimus
                perferendis laboriosam!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Carousel>
    </div>
  );
}
