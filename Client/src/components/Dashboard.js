import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Alert, Container, Button } from "react-bootstrap";

export default function Dashboard() {
  // eslint-disable-next-line
  const [type, setType] = useState("danger");
  // eslint-disable-next-line
  const [alert, setAlert] = useState(true);
  // eslint-disable-next-line
  const [message, setMessage] = useState("Oops! You have not paid the fees yet!");
  return (
    <>
      <Header />
      {alert ? <></> : <AlertDismissibleExample type={type} message={message} />}
      <h2 className="text-center mt-4 mb-4">
        <strong>Profile</strong>
      </h2>
      <Container
        style={{
          color: "#ffffff"
        }}
      >
        hey
      </Container>
      <Footer />
      <></>
    </>
  );
}

function AlertDismissibleExample({ type, message }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={type} onClose={() => setShow(false)} dismissible className="d-flex align-items-center justify-content-center">
        <Alert.Heading>{message}</Alert.Heading>
      </Alert>
    );
  }
  return (
    <div className="d-flex align-items-center justify-content-center pt-2">
      <Button onClick={() => setShow(true)} className="btn btn-primary btn-sm">
        Show Alert
      </Button>
    </div>
  );
}
