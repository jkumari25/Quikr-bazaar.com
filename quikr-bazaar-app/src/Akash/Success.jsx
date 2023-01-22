import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./success.css";
const Success = () => {
  return (
    <div className="card">
      <div className="div2">
        <i className="checkmark">✓</i>
      </div>
      <h1>Success</h1>
      <p>
        We received your purchase request;
        <br /> we'll be in touch shortly!
      </p>
      <Link to="/">
        <Button colorScheme="teal" style={{ marginTop: "10px" }}>
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
};

export default Success;
