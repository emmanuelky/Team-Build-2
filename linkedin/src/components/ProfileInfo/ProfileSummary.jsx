import React from "react"
import ProfilePicture from "./ProfilePicture";
import { Container, Button } from "react-bootstrap";
import { FaPen } from 'react-icons/fa';

const ProfileSummary = () => {

    return (
        <Container fluid className="m-5" id="summaryContainer">
            <div>   
                <img
                className="mb-3"
                id="backgroundImage"
                src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
                />
            </div> 
            <ProfilePicture />
            <div className="mt-5 ml-4">
                <Button id="pen1" variant="light" className="badge-pill"><a href=""><FaPen /></a></Button>
                <FaPen id="pen2" />
                <h4>Sara Sjöman</h4>
                <h6>Student at Strive School</h6>
                <h6 id="fontsizeP" className="text-muted">Stockholm, Stockholm County, Sweden • <a href="">Contact info</a></h6>
                <h6><a id="fontsizeP" href="">20 connections</a></h6>
            </div>
            <div className="mt-2 ml-4">
                <Button className="mr-1 badge-pill" size="sm" variant="primary">
                    <strong>Open to</strong>
                </Button>
                <Button className="mr-1 badge-pill" size="sm" variant="outline-secondary">
                    <strong>Add section</strong>
                </Button>
                <Button className="badge-pill" size="sm" variant="outline-secondary">
                    <strong>More</strong>
                </Button>
            </div>
            <div id="openToWork" className="mt-3 ml-4">
                <FaPen id="pen3" />
                <h6 id="fontsizeP"><strong>Open to work</strong></h6>
                <h6 id="fontsizeP">Junior Software Engineer, Junior Software Developer, Junior Programmer, Frontend Developer and Fronte...</h6>
                <h6 id="fontsizeP"><a href="">See all details</a></h6>
            </div>
        </Container>
    );
}

export default ProfileSummary;