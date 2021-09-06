import React from "react"
import ProfilePicture from "./ProfilePicture";
import { Container, Button } from "react-bootstrap";

const ProfileSummary = () => {

    return (
        <Container fluid className="m-5" id="summaryContainer">
                <img
                className="mb-3"
                id="backgroundImage"
                src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
                />
            <ProfilePicture />
            <div className="mt-5 ml-4">
            <h4>Sara Sjöman</h4>
            <h6>Student at Strive School</h6>
            <h6 className="text-muted">Stockholm, Stockholm County, Sweden • <a href="">Contact info</a></h6>
            <a href="">20 connections</a>
            </div>
            <div className="mt-2 ml-4">
                <Button className="mr-1 badge-pill" variant="primary">
                    <strong>Open to</strong>
                </Button>
                <Button className="mr-1 badge-pill" variant="outline-secondary">
                    <strong>Add section</strong>
                </Button>
                <Button className="badge-pill" variant="outline-secondary">
                    <strong>More</strong>
                </Button>
            </div>
        </Container>
    );
}

export default ProfileSummary;