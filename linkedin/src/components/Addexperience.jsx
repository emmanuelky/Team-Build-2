import React from "react";
import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

export default function Addexperience() {
  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        " https://striveschool-api.herokuapp.com/api/profile/:5d925e677360c41e0046d1f/experiences",
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
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
