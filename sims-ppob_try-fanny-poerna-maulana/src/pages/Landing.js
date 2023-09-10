import { FormRegister } from "../components/RegisterAndLogin";
import { Col, Container, Row, Image } from "react-bootstrap";
import IlustrationLogin from "../assets/Illustrasi-Login.png";

export const LandingPage = () => {
  return (
    <>
      <Container className="">
        <Row className="justify-content-center">
          <Col md={6}>
            <FormRegister />
          </Col>
          <Col md={6}>
            <>
              <Container style={{ objectFit: "cover" }}>
                <Image
                  src={IlustrationLogin}
                  alt="ilustration"
                  style={{ width: "600px", maxHeight: "760px" }}
                />
              </Container>
            </>
          </Col>
        </Row>
      </Container>
    </>
  );
};
