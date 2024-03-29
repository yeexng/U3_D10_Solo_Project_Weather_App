import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../Css/footer.css";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left footer">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          Xuan.nG
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
