import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Box,
  Card,
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
import { useHomeContext } from "../context/HomeContext";
import { useBasketContext } from "../context/BasketContext";

const Home = () => {
  const { products, loading } = useHomeContext();
  const { basket, setBasket } = useBasketContext();
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  const addToBasket = (product) => {
    setBasket([
      ...basket,
      {
        productCount:0,
        ...product
      }
    ]);
    // console.log(basket)
  };
  return (
    <>
      <Grid
        style={{ width: "80%", margin: "0 auto" }}
        container
        justifyContent="start"
      >
        {products.map((product) => {
          return (
            <Grid item xs={12} md={4}>
              <Card
                style={{ height: "600px" }}
                sx={{ maxWidth: 345, marginTop: "60px" }}
              >
                <CardHeader
                  sx={{ height: "12%" }}
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
                    <IconButton onClick={()=>addToBasket(product)} aria-label="add to favorites">
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                  }}
                >
                  <Rating
                    style={{ fontSize: "2rem" }}
                    name="half-rating-read"
                    defaultValue={product.rating.rate}
                    precision={0.1}
                    readOnly
                  />
                  <Typography
                    sx={{ color: "green" }}
                    color="text.secondary"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {product.rating.count}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center",marginTop:"20px" }}>
            <Typography sx={{ color: "green" }} color="text.secondary" gutterBottom variant="h5" component="div">{product.price}$</Typography>
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
