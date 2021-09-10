import React, { useEffect } from "react"
import ProfilePicture from "./ProfilePicture";
import { Container, Button } from "react-bootstrap";
import { FaPen } from 'react-icons/fa';
import { fetchdata, fetchMe, fetchUser } from "../../functions/fetches";
import { useState } from "react";
import { useParams } from "react-router";





const ProfileSummary = () => {
    const [profileData, setProfileData] = useState({})
    let { id } = useParams()

    useEffect(async () => {
        let data
        if (id) {
            data = await fetchUser(id)
            setProfileData(data)
        } else {
            data = await fetchMe()
            setProfileData(data)
        }
    }, [id]);

    return (
        <Container fluid className="border" id="summaryContainer">
            <div>
                <img
                    className=""
                    id="backgroundImage"
                    src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
                />
            </div>
            <ProfilePicture img={profileData.image} />
            <div className="mt-5 ml-4">
                {!id && <Button id="pen1" variant="light" className="badge-pill"><a href=""><FaPen /></a></Button>}
                {!id && <FaPen id="pen2" />}
                <h4>{profileData.name} {profileData.surname}</h4>
                <h6>{profileData.title}</h6>
                <h6 id="fontsizeP" className="text-muted">{profileData.area} • <a href="">Contact info</a></h6>
                <h6><a id="fontsizeP" href="">238 connections</a></h6>
            </div>
            <div className="mt-2 ml-4">
                {id ? <>
                    <Button className="mr-1 badge-pill" size="sm" variant="primary">
                        <strong>Message</strong>
                    </Button>
                    <Button className="badge-pill" size="sm" variant="outline-secondary">
                        <strong>More</strong>
                    </Button>
                </> :
                    <>
                        <Button className="mr-1 badge-pill" size="sm" variant="primary">
                            <strong>Open to</strong>
                        </Button>
                        <Button className="mr-1 badge-pill" size="sm" variant="outline-secondary">
                            <strong>Add section</strong>
                        </Button>
                        <Button className="badge-pill" size="sm" variant="outline-secondary">
                            <strong>More</strong>
                        </Button>
                    </>}
            </div>
            <div id="openToWork" className="mt-3 ml-4">
                {!id && <FaPen id="pen3" />}
                <h6 id="fontsizeP"><strong>Open to work</strong></h6>
                <h6 id="fontsizeP">Junior Software Engineer, Junior Software Developer, Junior Programmer, Frontend Developer and Frontend Dev...</h6>
                <h6 id="fontsizeP"><a href="">See all details</a></h6>
            </div>
            <div>
                <img
                    className="mb-3"
                    id="striveImg"
                    src="data:image/png;base64,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"
                />
                <h6 id="striveText">Strive School</h6>
            </div>

        </Container>
    );
}

export default ProfileSummary;