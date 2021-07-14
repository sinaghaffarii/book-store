import React from "react";
import { Row, Col, ListGroup,Image  , Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { products } from "../../products";

const Product = ({ match , history}) => {


  const product = products.find((item) => {
    return item._id === match.params.id;
  });

  const addProductToCart = () => {
    history.push(`/cart/${match.params.id}`)

  }

  return (
    <Container className="mb-5">
      <Link to="/book-store" className="btn btn-outline-primary mt-4 ">
        بازگشت به صفحه اصلی
      </Link>
      <Row>
        <Col lg={5} md={6} sm={12} >
        
        <Image src={product.image} className="mt-5 shadow" fluid thumbnail/>
        
        </Col>
        <Col lg={5} md={6} sm={12} className="ml-auto mt-5">
        <ListGroup className="text-right">
          <ListGroup.Item>{product.name}</ListGroup.Item>
          <ListGroup.Item className="text-muted font-weight-light">{product.author}</ListGroup.Item>
          <ListGroup.Item>{product.price}</ListGroup.Item>
        </ListGroup>
        <button  onClick={addProductToCart} className="d-block w-100 mt-4 btn btn-outline-success">افزودن به سبد خرید</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
