import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function AddModal({
  show,
  handleClose,
  drName,
  appointments,
  setAppointments,
}) {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([
      ...appointments,
      {
        id: appointments.length + 1,
        patient: patientName,
        day: date,
        consulted: false,
        doctor: drName,
      },
    ]);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your name"
                onChange={(e) => setPatientName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="datetime">
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <div className="text-center ">
              <Button variant="success" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
