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
import { useParams } from "react-router";

export default function Dashboard() {
  let { id } = useParams()

  if (!id) {
    return (
      <div className="mb-3">
        <Container className="pb-2 border" id="dashboardDiv" style={{ backgroundColor: "#DCE6F1" }}>
          <h5 className="pl-2 pt-4">Your Dashboard </h5>
          {/* <div className="staricon">
            <FaStar />
          </div> */}
          <h6 className="pl-2 pb-2 text-muted">
            <em>Private to you</em>
          </h6>
  
          <CardGroup className="pl-2 pr-2">
            <Card id="dbCard1">
              <Card.Body>
                <Card.Title>
                  <a href="#"><h4>50</h4></a>
                </Card.Title>
                <Card.Text id="dashboardFontSize">
                  Who viewed your profile
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  <a href="#"><h4>12</h4></a>
                </Card.Title>
                <Card.Text id="dashboardFontSize">
                  Article news
                </Card.Text>
              </Card.Body>
            </Card>
            <Card id="dbCard2">
              <Card.Body>
                <Card.Title>
                  <a href="#"><h4>77</h4></a>
                </Card.Title>
                <Card.Text id="dashboardFontSize">
                  Search appearances
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <div className="list-div pl-2 pr-2">
            <ListGroup>
              <ListGroup.Item id="dbCard3">
                <FaSatelliteDish id="dashboardIcon"/>
                <a href="#" id="dashboardFontSize" className="pl-5 li-item">
                  <strong>Creator mode: <span className="text-muted">Off</span></strong> <br/> <span className="text-muted pl-5">Grow your audience and get discovered by
                  highlighting content on your profile.</span>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <FaUsers id="dashboardIcon" />
                <a href="#" id="dashboardFontSize" className="pl-5 li-item">
                  <strong>My Network</strong> <br/> <span className="text-muted pl-5">Manage your connections, events, and interests.</span>
                </a>
              </ListGroup.Item>
  
              <ListGroup.Item>
                <FaRegMoneyBillAlt id="dashboardIcon" />
                <a href="#" id="dashboardFontSize" className="pl-5 li-item">
                  <strong>Salary insights</strong> <br/> <span className="text-muted pl-5">See how your salary compares to others in the
                  community.</span>
                </a>
              </ListGroup.Item>
  
              <ListGroup.Item id="dbCard4">
                <FaRegBookmark id="dashboardIcon" />
                <a href="#" id="dashboardFontSize" className="pl-5 li-item">
                <strong>My items</strong> <br/> <span className="text-muted pl-5">Keep track of your jobs, courses and articles.</span>
                </a>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Container>
      </div>
    );
  } else {
    return <React.Fragment />
  }
}
