import React from "react";
import SideBar from "../SideBar";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchdata, fetchMe, fetchUser } from "../../functions/fetches";
import {
  FaRegBookmark,
  FaHashtag,
  FaUsers,
  FaCalendarWeek,
} from "react-icons/fa";
import "./SideBarHome.css";
export default function SideBarHome() {
  const [profileData, setProfileData] = useState({});
  let { id } = useParams();

  useEffect(async () => {
    let data;
    if (id) {
      data = await fetchUser(id);
      setProfileData(data);
    } else {
      data = await fetchMe();
      setProfileData(data);
    }
  }, [id]);

  return (
    <div className="d-flex flex-column align-items-center" id="sidebardiv">
      <Card style={{ width: "15rem", marginRight: "50px", padding: "0px" }}>
        <Card.Img
          variant="center"
          src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
        />
        <Card.Body>
          <Card.Img
            variant="top"
            style={{
              borderRadius: "50%",
              width: "70px",
              height: "70px",
              marginLeft: "40px",
            }}
            className="mx-150  display:block"
            src={profileData.image}
          />
          <Card.Title>
            {profileData.name} {profileData.surname}
          </Card.Title>
          <Card.Text>{profileData.title}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem id="userdetails">
            Who viewed your profile{" "}
            <span>
              <a href="#">54</a>
            </span>
            <br /> Views of your post{" "}
            <span>
              <a href="#">925</a>
            </span>
          </ListGroupItem>
          <ListGroupItem id="userdetails">
            Access exclusive tools & insights
            <br />
            <span> 🟨</span>
            <span className="pl-2">
              <strong>Retry Premium Free</strong>
            </span>
          </ListGroupItem>
          <ListGroupItem id="userdetails">
            <FaRegBookmark id="dashboardIcon" />
            <span id="myitems"> My items</span>
          </ListGroupItem>
        </ListGroup>
      </Card>

      {/* bottom part */}
      <Card style={{ width: "15rem", marginRight: "50px", padding: "0px" }}>
        <Card.Header id="headings">Recent</Card.Header>
        <Card.Body>
          <Card.Text id="userdetails">
            <FaUsers /> Germany's Virtual Recruiting
            <br />
            <br />
            <FaCalendarWeek />
            Web Design and Development, UX/UI
            <br />
          </Card.Text>
          <Card.Title id="headings"> Groups</Card.Title>
          <Card.Text id="userdetails">
            <FaUsers />
            Web Design and Development, UX/UIt
            <br />
            <a href="#">See all</a>
          </Card.Text>
          <Card.Title id="headings"> Events</Card.Title>
          <Card.Text id="userdetails">
            <FaUsers />
            Germany's Virtual Recruiting & Branding Event
          </Card.Text>
          <Card.Title id="headings"> Followed Hastags</Card.Title>
          <Card.Text id="userdetails">
            <FaHashtag /> job seekers
            <br />
            <FaHashtag /> React
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
