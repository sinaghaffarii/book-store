import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { products } from "../../products";
import Product from "../../Components/Product/Product";

import "./Home.css";

import image1 from "../../Components/image/image-1.jpg";
import image2 from "../../Components/image/image-2.jpg";
import image3 from "../../Components/image/image-3.jpg";

const Home = () => {
  return (
    <div className="my-5">
      <div>
        <Container fluid>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-100"
                src={image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-100"
                src={image2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 h-100"
                src={image3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <div className="container-fluid ">
        <Row className=" my-5 px-1 mx-auto">
          {products.map((item) => {
            return (
              <Col key={item._id} lg={3} md={4} sm={6} xs={12}>
                <Product product={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Home;
