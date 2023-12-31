import {
  Container,
  Form,
  Image,
  InputGroup,
  Col,
  Button,
} from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TransactioAsync,
  fetchBalance,
  fetchServices,
} from "../store/ProfileSlice";
import { useParams } from "react-router-dom";
import { Rupiah } from "../config/Currency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Navigationbar } from "../components/Navbar";
import ComponentProfile from "../components/ProfileInfo";

export const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const services = useSelector((state) => state.profile.services);
  const selectedService = services && services[id];

  const handleTransaction = (e) => {
    e.preventDefault();
    const serviceCode = selectedService?.service_code;
    const formData = {
      service_code: serviceCode,
    };
    dispatch(TransactioAsync(formData)).then((result) => {
      console.log("then thenn", result);
      if (result?.type === "profile/transaction/rejected") {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Gagal membayar ${selectedService?.service_name}`,
          text: "Saldo tidak mencukupi, silahkan Top Up",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Berhasil membayar ${selectedService?.service_name}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  useEffect(() => {
    dispatch(fetchServices());
    dispatch(fetchBalance());
  }, [dispatch]);

  return (
    <>
      <Navigationbar />
      <Container>
        <div className="mt-4">
          <ComponentProfile />
        </div>
        <div className="row ms-3 mt-4">
          <div className="mt-4">
            <p style={{ fontWeight: "500" }}>Pembayaran</p>
            <p className="fw-bold">
              <Image src={selectedService?.service_icon} />
              {selectedService?.service_name}
            </p>
          </div>
          <Form>
            <Form.Group
              as={Col}
              md={12}
              className="mb-3"
              controlId="formGroupEmail"
            >
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <FontAwesomeIcon icon={faMoneyCheckDollar} />
                </InputGroup.Text>
                <Form.Control
                  type="number"
                  aria-describedby="inputGroupPrepend"
                  value={selectedService?.service_code}
                  placeholder={Rupiah(selectedService?.service_tariff)}
                  disabled
                />
              </InputGroup>
            </Form.Group>
            <Button
              className="w-100"
              variant="danger"
              onClick={handleTransaction}
            >
              Bayar
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};
