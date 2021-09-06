import React from "react";
import {
  Container,
  Row,
  Card,
  CardGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import {
  FaSatelliteDish,
  FaUsers,
  FaRegMoneyBillAlt,
  FaRegBookmark,
  FaStar,
} from "react-icons/fa";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <Container style={{ backgroundColor: "#DCE6F1" }}>
        <h2>Your Dashboard </h2>
        <div className="staricon">
          <FaStar />
        </div>
        <h4 className="text-muted">
          <em>Private to you</em>
        </h4>

        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>
                <a href="#">50</a>
              </Card.Title>
              <Card.Text>
                <a href="#">viewed ur profile</a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <a href="#">50</a>
              </Card.Title>
              <Card.Text>
                <a href="#">viewed ur profile</a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <a href="#">50</a>
              </Card.Title>
              <Card.Text>
                <a href="#">viewed ur profile</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <div className="list-div">
          <ListGroup>
            <ListGroup.Item>
              <FaSatelliteDish />
              <a href="#" className="li-item">
                Creator mode: Off Grow your audience and get discovered by
                highlighting content on your profile.
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <FaUsers />
              <a href="#" className="li-item">
                My Network Manage your connections, events, and interests.
              </a>
            </ListGroup.Item>

            <ListGroup.Item>
              <FaRegMoneyBillAlt />
              <a href="#" className="li-item">
                Salary insights See how your salary compares to others in the
                community.
              </a>
            </ListGroup.Item>

            <ListGroup.Item>
              <FaRegBookmark />
              <a href="#" className="li-item">
                My items Keep track of your jobs, courses and articles.
              </a>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    </div>
  );
}
