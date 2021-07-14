import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { TiPhoneOutline } from "react-icons/ti";
import { FaAddressBook } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import "./Footer.css";
import note from "../image/Notes-bro.png";

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col lg={2} md={4} sm={12} className="mx-auto order-3">
            <Image src={note} className="illustrator d-block mx-auto" />
          </Col>
          <Col lg={2} md={4} sm={12} className="mx-auto mt-5 text-center order-2">
            <h6>دسترسی سریع</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="/" className="text-decoration-none text-dark">
                  درباره ما
                </a>
              </li>
              <li className="list-group-item">
                <a href="/" className="text-decoration-none text-dark">
                  تماس با ما
                </a>
              </li>
              <li className="list-group-item">
                <a href="/" className="text-decoration-none text-dark">
                  قوانین و مقررات سایت
                </a>
              </li>
            </ul>
          </Col>
          <Col
            lg={2}
            md={4}
            sm={12}
            className="mx-auto mt-5  etelaat text-right order-1"
          >
            <p className="my-4">
              شماره تماس :{" "}
              <span className="icons">
                <TiPhoneOutline />
              </span>
            </p>
            <p className="my-4">
              آدرس :{" "}
              <span className="icons">
                <FaAddressBook />
              </span>
            </p>
            <p className="my-4">
              ایمیل :{" "}
              <span className="icons">
                <HiOutlineMailOpen />
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
