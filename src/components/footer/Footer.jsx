import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Vector from "../../images/Vector.svg";

const Footer = () => {
  return (
    <>
      <div className="pt-5 pb-3">
        <Container>
          <Row gap={5}>
            <Col lg={4} md={6} sm={6} xs={12} className="footer_box">
              <div
                className="d-flex align-items-center pb-3"
                style={{ gap: "5px" }}
              >
                <img src={Vector} alt="Vector" />
                <div className="fw-bold fs-4">Logo</div>
              </div>
              <div>
                <div className="lh-lg fw-bolder">
                  Address:{" "}
                  <span className="fw-normal">1762 School House Road</span>
                </div>
                <div className="lh-lg fw-bolder">
                  Call Us: <span className="fw-normal">1233-777</span>
                </div>
                <div className="lh-lg fw-bolder">
                  Email:{" "}
                  <span className="fw-normal">groceyish@contact.com</span>
                </div>
              </div>
            </Col>
            <Col lg={2} md={6} sm={6} xs={6} className="footer_box">
              <div className="footer_head">Menu</div>
              <div>
                <a href="#" className="lh-lg">
                  Home
                </a>
                <a href="#" className="lh-lg">
                  About us
                </a>
                <a href="#" className="lh-lg">
                  Products
                </a>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6} className="footer_box">
              <div className="footer_head">Quick Links</div>
              <div>
                <a href="#" className="lh-lg">
                  Terms & Conditions
                </a>
                <a href="#" className="lh-lg">
                  Return & Refund Policy
                </a>
                <a href="#" className="lh-lg">
                  Shipping Policy
                </a>
              </div>
            </Col>
            <Col lg={2} md={6} sm={6} xs={6} className="footer_box">
              <div className="footer_head">Security</div>
              <div>
                <a href="#" className="lh-lg">
                  Privacy Policy
                </a>
                <a href="#" className="lh-lg">
                  Payment Policy
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer_border">
        <Container>
          <div>2022 Deal Buddy Limited, All rights reserved.</div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
