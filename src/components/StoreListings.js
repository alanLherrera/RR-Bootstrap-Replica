import React from "react";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

function StoreListing() {
  return (
    <div>
      <h2>Browse stores in San Diego, CA</h2>
      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Row>
            <Col xs=".5">
              <Image
                src="https://www.instacart.com/image-server/180x180/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                roundedCircle
              />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>

          <Row>
            <Col xs=".5">
              <Image
                src="https://www.instacart.com/image-server/120x120/www.instacart.com/assets/domains/warehouse/logo/1556/3fca568c-4c4b-46ea-b6c0-0f397532bb70.png"
                roundedCircle
              />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>

          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                src="https://www.instacart.com/image-server/180x180/www.instacart.com/assets/domains/warehouse/logo/1373/1da94693-c8ed-44f8-b405-cc92024f9ec5.jpg"
                roundedCircle
              />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>Vitmamin shoppe</h5>
              <p>Delivery</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default StoreListing;
