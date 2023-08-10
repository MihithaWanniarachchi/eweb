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
        marginTop: "5px", // Adjust the distance from the top
        marginBottom: "5px", // Adjust the distance from the bottom
        boxShadow: "0px 0px 15px grey", // Change the shadow color to black
        borderRadius: 5, // Add a slight border radius to round the corners
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.015)",
        },
        marginBottom: "5px", // Add margin bottom of 5px
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ marginTop: 2, textAlign: "center", fontWeight: "bold" }}
      >
        {title} {/* Display the title name */}
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
          flexDirection: "column", // Display elements vertically
          alignItems: "center", // Center items horizontally
        }}
      >
        <BasicRating rating={rating} /> {/* Display the rating above */}
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
