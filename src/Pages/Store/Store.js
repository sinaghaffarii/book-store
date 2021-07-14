import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { products } from "../../products";
import Product from "../../Components/Product/Product";
import { BiSearchAlt } from "react-icons/bi";

const Store = () => {
  const [searchBar, setSearchBar] = useState("");

  return (
    <div>
      <Row>
        <Col
          lg={3}
          md={6}
          sm={6}
          className="ml-auto mt-4 d-flex justify-content-center align-items-center"
        >
          <p className="text-center w-50 border p-1 rounded shadow-sm">
            محصولات
          </p>
        </Col>
      </Row>

      <Row>
        <Col
          lg={6}
          md={6}
          sm={8}
          className="mx-auto d-flex align-items-center justify-content-center mt-3"
        >
          <div className="position-relative">
            <input
              type="text"
              placeholder="دنبال چه کتابی میگردی؟"
              className="input text-right px-2 py-2"
              onChange={(event) => setSearchBar(event.target.value)}
            />
            <BiSearchAlt className="search-icon" />
          </div>
        </Col>
      </Row>

      <Row className="mt-2 mb-5 px-5">
        {products.filter((item) => {
          if(searchBar == '') {
            return item 
          } else if(item.name.toLowerCase().includes(searchBar.toLowerCase())) {
            return item 
          } 
        }).map((item) => {
            return (
              <Col key={item._id} lg={3} md={4} sm={6} xs={12}>
                <Product product={item} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Store;
