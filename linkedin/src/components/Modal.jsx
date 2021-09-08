import Addexperience from "./Addexperience";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function Modalbox() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const deleteExperience = async (e,user,experience) => {
    e.preventDefault() 

    
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences/${experience._id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MzlmNjdiZTZjMTAwMTVmOWRiZDQiLCJpYXQiOjE2MzA5NDM3MzUsImV4cCI6MTYzMjE1MzMzNX0.aqatGQ0--T-ZQWZJQeYBJ0q7JsbxuWlScmsooaM_1ZE", `,
            }
        })
        if(response.ok) {
            
            alert("Experience deleted successfully")
        } else {
            alert("There is  some problem")
        }
    } catch (err) {
        console.log(err)
    }
}

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
          {/*<Button variant="danger" onClick = {(e)=>deleteExperience(e,user,experience)}>Delete</Button>*/}

          
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Modalbox;
