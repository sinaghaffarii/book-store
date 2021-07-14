import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-4">
        <LinkContainer to={`/product/${product._id}`}>
        <Card.Img src={product.image} alt={product.image} variant="top"/>
        </LinkContainer>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="text-muted">{product.author}</Card.Text>
         <LinkContainer to={`/product/${product._id}`}>
         <button
            type="submit"
            className="btn btn-outline-success d-block w-100"
          >
            {product.price}
          </button>
         </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
