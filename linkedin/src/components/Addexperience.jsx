import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

const Addexperience = (props) => {
  const defaultExperience = {
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  }
  const [experience, setExperience] = useState(defaultExperience);

  const propExperience = props.experience
  const isEdit = props.isEdit

  useEffect(() => {
    if (isEdit) {
      let propsExperience = {
        role: propExperience.role,
        company: propExperience.company,
        startDate: propExperience.startDate,
        endDate: propExperience.endDate,
        description: propExperience.description,
        area: propExperience.area,
      }
  
      setExperience(propExperience)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isEdit) {
      try {
        const response = await fetch(
          " https://striveschool-api.herokuapp.com/api/profile/" +
            propExperience.user +
            "/experiences/" + propExperience._id,
          {
            method: "PUT",
            body: JSON.stringify(experience),
            headers: {
              "content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MzlmNjdiZTZjMTAwMTVmOWRiZDQiLCJpYXQiOjE2MzA5NDM3MzUsImV4cCI6MTYzMjE1MzMzNX0.aqatGQ0--T-ZQWZJQeYBJ0q7JsbxuWlScmsooaM_1ZE",
            },
          }
        );
        if (response.ok) {
          console.log(experience);
          alert("experience is edited");
        } else {
          console.log(propExperience.user)
          console.log(response.url)
          alert("not saved correctly");
        }
      } catch (error) {
        console.log(error);
      }
      setExperience({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
      });
    } else {
      try {
        const response = await fetch(
          " https://striveschool-api.herokuapp.com/api/profile/" +
            propExperience.user +
            "/experiences/" + propExperience._id,
          {
            method: "POST",
            body: JSON.stringify(experience),
            headers: {
              "content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MzlmNjdiZTZjMTAwMTVmOWRiZDQiLCJpYXQiOjE2MzA5NDM3MzUsImV4cCI6MTYzMjE1MzMzNX0.aqatGQ0--T-ZQWZJQeYBJ0q7JsbxuWlScmsooaM_1ZE",
            },
          }
        );
        if (response.ok) {
          console.log(experience);
          alert("experience is added");
        } else {
          console.log(response.url)
          alert("not saved correctly");
        }
      } catch (error) {
        console.log(error);
      }
      setExperience({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
      });
    }
  };

  // useEffect(() => {}, []);
  console.log(experience);

  const handleInput = (e, propertyName) => {
    setExperience({
      ...experience,
      [propertyName]: e.target.value,
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Row>
            <Form.Label column lg={3}>
              Title
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Role"
                value={experience.role}
                onChange={(e) => handleInput(e, "role")}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column lg={3}>
              Company
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Company"
                value={experience.company}
                onChange={(e) => handleInput(e, "company")}
              />
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Form.Label column lg={3}>
              Start date
            </Form.Label>
            <Col>
              <Form.Control
                type="date"
                placeholder="yyyy-mm-dd"
                value={experience.startDate}
                onChange={(e) => handleInput(e, "startDate")}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column lg={3}>
              End date
            </Form.Label>
            <Col>
              <Form.Control
                type="date"
                placeholder="yyyy-mm-dd"
                value={experience.endDate}
                onChange={(e) => handleInput(e, "endDate")}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column lg={3}>
              Description
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Job description"
                value={experience.description}
                onChange={(e) => handleInput(e, "description")}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column lg={3}>
              Area
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Location"
                value={experience.area}
                onChange={(e) => handleInput(e, "area")}
              />
            </Col>
          </Form.Row>
          <Button type="submit" className="mt-3">
            {isEdit ? "Save Changes" : "Submit"}
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
export default Addexperience