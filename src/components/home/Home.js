import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Banner1 from "../../images/Group5.svg";
import Banner2 from "../../images/Group6.svg";
import Banner3 from "../../images/Group7.svg";
import Icon from "../../images/Icon.svg";
import ButtonIcon from "../../images/ButtonIcon.svg";
import ProductCard from "../card/Card";

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  return (
    <div>
      <Header />

      <Container className="py-4">
        <Row gap={3}>
          <Col md={8} sm={12}>
            <img src={Banner3} alt="" className="w-100" />
          </Col>
          <Col md={4} sm={12}>
            <Row style={{ height: "100%", alignContent: "space-between" }}>
              <Col sm={12}>
                <img src={Banner2} alt="" className="w-100 p-y-10" />
              </Col>
              <Col sm={12}>
                <img src={Banner1} alt="" className="w-100" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="py-4">
        <Row>
          <Col lg={3} md={4}>
            <div className="left_menu">
              <div
                className="fw-bolder d-flex justify-content-between"
                onClick={handleClick}
              >
                <div>Top Categories</div>
                <img
                  src={Icon}
                  alt=""
                  className={`${isActive ? "top_open" : ""} arrow`}
                />
              </div>
              <div
                className={`${isActive ? "d-none" : "menu_list pt-2 d-block"} `}
              >
                {[1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
                  return (
                    <div className="d-flex justify-content-between align-items-center left_menu_list">
                      <img src={ButtonIcon} alt="" className="button_icon" />
                      <div className="list_name">Fruits & Vegetables</div>
                      <img src={Icon} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col lg={9} md={8}>
            <Row>
              {[1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
                return (
                  <Col lg={4} md={6} sm={6} className="pb-4 product_card">
                    <ProductCard />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9795.04904569558!2d72.5467303060016!3d23.133764888953596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82bd7cee11cb%3A0x234d85424f9e1cc7!2sShri%20Mata%20Vaishnodevi%20Tirthdham!5e0!3m2!1sen!2ses!4v1686739173779!5m2!1sen!2ses"
          width="100%"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
