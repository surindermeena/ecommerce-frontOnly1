import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AutoAwesome } from '@mui/icons-material';

export default function CardComponent({product}) {
  return (
    <Card sx={{ maxWidth: "300px", height:"600px" , margin: "12px", boxShadow: "0px 0px 10px black", boxSizing: "border-box" }}>
      <CardMedia
        sx={{ height: "200px", width: "60%", margin:"auto",marginTop:"25px",paddingTop:"60px" ,border:"1px solid black" }}
        image={product.image}
        title="green iguana"
      />

      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>

      </CardContent>

      <CardActions sx={{position:"relative"}}>
        <Button size="small" sx={{position:"absolute", left: "8px", border: "1px solid black"}}>${product.price}</Button>
        <Button size="small" sx={{position:"absolute", right: "8px", border: "1px solid black"}}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}