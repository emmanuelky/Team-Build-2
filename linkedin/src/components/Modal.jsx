import Addexperience from "./Addexperience";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function Modalbox() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        id="eduIconColor"
        className="align-self-center mt-4 mr-3 d-block"
        onClick={handleShow}
      >
        <i class="fas fa-plus"></i>
      </div>
      {/* <Button variant="primary" onClick={handleShow}>
        +
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Addexperience />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Modalbox;
