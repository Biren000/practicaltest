import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import image1 from "../../images/image1.svg";
const ProductCard = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <div className="discound_tag">25% OFF</div>
          <div className="text-center">
            <img src={image1} alt="image1" className="product_image" />
          </div>
          <div className="text-secondary fw-light">Beverages</div>
          <div className="fw-bolder pb-2">Nescafe Coffee</div>
          <div className="d-flex align-items-end pb-2" style={{ gap: "5px" }}>
            <div className="fw-bolder fs-4" style={{ color: "#0DA487" }}>
              $4.50
            </div>
            <div className="fw-normal text-secondary pb-1">$3.99</div>
          </div>
          <div className="d-grid ">
            <Button
              style={{ background: "#0DA487", border: "#0DA487" }}
              size="sm"
            >
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
