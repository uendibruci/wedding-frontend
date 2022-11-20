import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function SliderOne() {
  return (
    <div className="sliderContainer">
      <Container fluid="lg">
        <Row className="mt-2">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <Row>
              <Col className="px-1 py-1">
                <Image
                  thumbnail="true"
                  fluid="true"
                  src="https://images.unsplash.com/photo-1549997965-a0cb188487f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="d-block w-100 custom-fit-big"
                  alt="..."
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <Row>
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                xxl={6}
                className="px-1
                    py-1"
              >
                <Image
                  src="https://images.unsplash.com/photo-1562859135-3c009b776595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  className="img-fluid custom-fit img-responsive img-thumbnail"
                  alt="1"
                />
              </Col>
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                xxl={6}
                className="px-1
                    py-1"
              >
                <Image
                  src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="img-fluid custom-fit img-responsive img-thumbnail"
                  alt="1"
                />
              </Col>
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                xxl={6}
                className="px-1
                    py-1"
              >
                <Image
                  src="https://images.unsplash.com/photo-1571984129381-41d698ebca6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="img-fluid custom-fit img-responsive img-thumbnail"
                  alt="1"
                />
              </Col>
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                xxl={6}
                className="px-1
                    py-1"
              >
                <Image
                  src="https://images.unsplash.com/photo-1580824456624-90e7ebe08d4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="img-fluid custom-fit img-responsive img-thumbnail"
                  alt="1"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SliderOne;
