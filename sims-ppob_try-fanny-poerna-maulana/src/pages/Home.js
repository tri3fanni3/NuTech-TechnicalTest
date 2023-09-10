import { Container } from "react-bootstrap";
import { Services } from "../components/Sevices";
import { BannerHome } from "../components/Banner";
import { Navigationbar } from "../components/Navbar";
import ComponentProfile from "../components/ProfileInfo";

export const HomePage = () => {
  return (
    <>
      <Navigationbar />
      <Container className="">
        <ComponentProfile />
        <div className="d-flex">
          <Services />
        </div>
        <p style={{ fontWeight: "600", marginTop: "40px" }}>
          Temukan promo menarik
        </p>
        <div className="mb-5">
          <BannerHome />
        </div>
      </Container>
    </>
  );
};
