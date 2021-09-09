import Addexperience from "./Addexperience";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { fetchExperience } from "../functions/fetches";

const Modalbox = (props) => {
  const [show, setShow] = useState(false);
  const [experience, setExperience] = useState({})

  useEffect(async () => {
    //console.log("useEffect: ", props.experience)
    if (props.experience) {
      let data = await fetchExperience(props.experience.user, props.experience._id)
      setExperience(data)
      //console.log("props.experience is: ", props.experience)
      //console.log("data is: ", data)
    }
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const deleteExperience = async () => {
    console.log(props.experience.user, props.experience._id)
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${props.experience.user}/experiences/${props.experience._id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MzlmNjdiZTZjMTAwMTVmOWRiZDQiLCJpYXQiOjE2MzA5NDM3MzUsImV4cCI6MTYzMjE1MzMzNX0.aqatGQ0--T-ZQWZJQeYBJ0q7JsbxuWlScmsooaM_1ZE`
            }
        })
        if(response.ok) {
            alert("Experience deleted successfully")
            handleClose()
        } else {
            console.log(response)
            alert("There is some problem")
        }
    } catch (err) {
        console.error(err)
    }
  }

  return (
    <>
      <div
        id="eduIconColor"
        className="align-self-center mt-4 mr-3 d-block"
        onClick={handleShow}
      >
        {props.isEdit ? <i className="fas fa-pen"></i> : <i className="fas fa-plus"></i>}
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
          <Modal.Title>{props.isEdit ? "Edit Experience" : "Add Experience"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Addexperience experience={props.experience} isEdit={props.isEdit}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {props.isEdit && <Button variant="danger" onClick={deleteExperience}>Delete</Button>}
          {/*<Button variant="danger" onClick = {(e)=>deleteExperience(e,user,experience)}>Delete</Button>*/}

        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Modalbox;
