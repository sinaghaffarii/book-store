import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import errorimage from "../../Components/image/errorService.png";
import errorimageSecond from "../../Components/image/errorSeviceSecond.png";

const Cart = () => {
  return (
    <Container>
    <p className="mx-auto text-center border w-50 rounded shadow-sm py-3 mt-5">محصول مورد نظر یافت نشد</p>
      <Row>
 
     
   
        <Col
          lg={6}
          md={6}
          sm={10}
          xs={10}
          className="mx-auto mt-5 d-flex align-items-center justify-content-center error-image-pedar"
        >
        
          <Image
            src={errorimage}
            alt="503 unavailble Service"
            className="error-image position-relative"
          />
          <Image
            src={errorimageSecond}
            alt="503 unavailble Service"
            className="position-absolute anime-error"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
