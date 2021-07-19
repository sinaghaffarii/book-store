import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BiUserPlus } from "react-icons/bi";
import popcorn from "../../Components/image/Popcorns-amico.png";
import { LinkContainer } from "react-router-bootstrap";

const Account = () => {
  return (
    <div className="container-fluid my-5 ">
      <Row>
        <Col
          lg={4}
          md={8}
          sm={10}
          xs={10}
          className="mx-auto d-flex order-1 justify-content-center my-auto"
        >
          <Image src={popcorn} alt="papcorn illustrator" className="popcorn" />
        </Col>
        <Col
          lg={6}
          md={8}
          sm={10}
          xs={10}
          className="mx-auto order-0 border-none p-3 rounded shadow-me "
        >
          <form>
            <div className="border-none rounded-pill  text-center w-25 d-flex justify-content-center text-center mx-auto mb-3 rounded shadow-sm-me">
              <p className="my-auto py-2">فرم ثبت نام</p>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control text-right border-light complete rounded-pill shadow-sm-me"
                  placeholder="نام"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control text-right border-light complete rounded-pill shadow-sm-me"
                  placeholder="نام خوانوادگی"
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <input
                  type="email"
                  className="form-control text-right border-light complete rounded-pill shadow-sm-me"
                  placeholder="ایمیل"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control text-right border-light complete rounded-pill shadow-sm-me"
                  placeholder="رمز عبور"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control text-right border-light complete rounded-pill shadow-sm-me"
                  placeholder="تکرار رمز عبور"
                   required
                />
              </div>
              <div className="my-3 col-md-12">
                <div className="input-group ">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text  border-light  rounded-pill shadow-sm-me position-absolute myindex"
                      for="validatedInputGroupSelect"
                    >
                      کشور
                    </label>
                  </div>
                  <select
                    className="custom-select  border-light  rounded-pill shadow-sm-me w-100 position-relative"
                    id="validatedInputGroupSelect"
                    required
                  >
                    <option value=""></option>
                    <option value="1">ایران</option>
                    <option value="2">آمریکا</option>
                    <option value="3">آلمان</option>
                  </select>
                </div>
              </div>
              <div className="my-3 col-md-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text border-light  rounded-pill shadow-sm-me  position-absolute myindex"
                      for="validatedInputGroupSelect01"
                    >
                      استان
                    </label>
                  </div>
                  <select
                    className="custom-select border-light  rounded-pill shadow-sm-me w-100 position-relative"
                    id="validatedInputGroupSelect01"
                    required
                  >
                    <option value=""></option>
                    <option value="1">تهران</option>
                    <option value="2">آذربایجان شرقی</option>
                    <option value="3">البرز</option>
                  </select>
                </div>
              </div>
              <div className="my-3 col-md-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text border-light  rounded-pill shadow-sm-me position-absolute myindex"
                      for="validatedInputGroupSelect02"
                    >
                      شهر
                    </label>
                  </div>
                  <select
                    className="custom-select border-light  rounded-pill shadow-sm-me w-100 position-relative"
                    id="validatedInputGroupSelect02"
                    required
                  >
                    <option value=""></option>
                    <option value="1">تهران</option>
                    <option value="2">تبریز</option>
                    <option value="3">کرج</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 my-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text border-light  rounded-pill shadow-sm-me  position-absolute myindex h-100"
                      for="validatedInputGroupSelect03"
                    >
                      <AiOutlinePhone />
                    </label>
                  </div>

                  <input
                    type="text"
                    className="form-control border-light text-right  rounded-pill shadow-sm-me w-100 position-relative"
                    id="validatedInputGroupSelect03"
                    placeholder="تلفن"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 my-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text border-light  rounded-pill shadow-sm-me position-absolute h-100 myindex"
                      for="validatedInputGroupSelect04"
                    >
                      <AiOutlineMobile />
                    </label>
                  </div>

                  <input
                    type="text"
                    className="form-control border-light  rounded-pill shadow-sm-me w-100 position-relative text-right"
                    id="validatedInputGroupSelect04"
                    placeholder="تلفن همراه"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 my-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text border-light  rounded-pill shadow-sm-me position-absolute myindex h-100"
                      for="validatedInputGroupSelect07"
                    >
                      <BiMailSend />
                    </label>
                  </div>

                  <input
                    type="text"
                    className="form-control border-light  rounded-pill shadow-sm-me w-100 position-relative text-right"
                    id="validatedInputGroupSelect07"
                    placeholder="کد پستی"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 my-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text border-light  rounded-pill shadow-sm-me  position-absolute myindex h-100"
                      for="validatedInputGroupSelect08"
                    >
                      <FaRegAddressCard />
                    </label>
                  </div>

                  <input
                    type="text"
                    className="form-control border-light  rounded-pill shadow-sm-me w-100 position-relative text-right"
                    id="validatedInputGroupSelect08"
                    placeholder="کد ملی"
                    required
                  />
                </div>
              </div>

              <div className="col-md-12 mb-3">
                <div className="form-group ">
                  <textarea
                    className="form-control text-right position-relative border-light shadow-sm-me"
                    rows="3"
                    placeholder="آدرس"
                  ></textarea>
                  <ImLocation className="position-absolute text-info fixed-top m-2 icon-location" />
                </div>
              </div>
            </div>
            <div className="custom-control custom-checkbox text-right mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" for="customCheck1">
                شرایط ثبت نام را مطالعه کرده و میپذیرم
              </label>
            </div>
            <div className="text-right my-2">
              <LinkContainer to="/account">
                <button type="submit" className="mybutton">
                  ارسال <BiUserPlus />
                </button>
              </LinkContainer>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Account;
