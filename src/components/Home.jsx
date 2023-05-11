import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const Home = ({ products, basket, loading }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
    <Grid style={{width:"80%",margin:"0 auto"}} container justifyContent="start">
      {products.map((product) => {
        return (
            <Grid item xs={12}  md={4}>
          <Card style={{height:"600px"}} sx={{ maxWidth: 345,marginTop:"60px" }}>
            <CardHeader
            sx={{height:"12%"}}
              avatar={
                <Avatar aria-label="recipe">
                  <CardMedia
                    component="img"
                    image={`${product.image}`}
                    alt="Paella dish"
                  />
                </Avatar>
              }
              action={
                <IconButton aria-label="add to favorites">
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    style={{ color: "blue" }}
                  />
                </IconButton>
              }
              title={product.title}
              subheader={product.category}
            />
            <CardMedia
              component="img"
              image={`${product.image}`}
              alt="Paella dish"
              height={"50%"}
            />
              <Box sx={{ display: "flex", justifyContent: "space-around",marginTop:"20px" }}>
              <Rating
              style={{ fontSize: "2rem" }}
              name="half-rating-read"
              defaultValue={product.rating.rate}
              precision={0.1}
              readOnly
            />
            <Typography sx={{ color: "green" }} color="text.secondary" gutterBottom variant="h5" component="div">{product.rating.count}</Typography>
              </Box>
            
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </Card>
          </Grid>
        );
      })}
      </Grid>
    </>
  );
};

export default Home;
