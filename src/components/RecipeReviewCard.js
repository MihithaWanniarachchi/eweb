import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import BasicRating from "./Rating";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link } from "react-router-dom";

export default function RecipeReviewCard({
  item,
  handleClick,
  setProductList,
  productList,
  handlePdp,
}) {
  const { title, description, price, thumbnail, rating } = item;

  return (
    <Card
      sx={{
        maxWidth: 330,
        marginRight: "auto",
        marginTop: "5px", 
        marginBottom: "5px", 
        boxShadow: "0px 0px 15px grey",
        borderRadius: 5,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.015)",
        },
        marginBottom: "5px",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ marginTop: 2, textAlign: "center", fontWeight: "bold" }}
      >
        {title} {}
      </Typography>
      <Link to={`productDetails`}>
        <CardMedia
          component="img"
          height="194"
          image={thumbnail}
          alt="Product Thumbnail"
          onClick={(e) => handlePdp(e, item)}
        />
      </Link>
      <CardContent>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ fontSize: 17, marginBottom: 1, textAlign: "center" }}
        >
          {"$" + " " + price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column", 
          alignItems: "center", 
        }}
      >
        <BasicRating rating={rating} />
        <LoadingButton
          variant="outlined"
          sx={{
            marginTop: "auto",
            color: "black",
            borderColor: "black",
            outlineColor: "black",
            backgroundColor: "#ce2029",
            fontWeight: "bold",
          }}
          fullWidth
          className="add-to-cart"
          onClick={(e) => handleClick(e, item)}
        >
          ADD TO CART
        </LoadingButton>
      </CardActions>
    </Card>
  );
}
