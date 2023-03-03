import React from "react";
import { Container } from "react-bootstrap";

const Commonsection = (props) => {
  return (
    <section className="common__section" style={{
        background: "linear-gradient(#212245b2, #212245b2),url('/assets/images/banner-02.jpg')",
        backgroundRepeat:" no-repeat",
        backgroundSize: "cover",
        backgroundPosition:" center",
        padding:" 80px 0px",
    }}>
      <Container>
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </section>
  );
};

export default Commonsection;
