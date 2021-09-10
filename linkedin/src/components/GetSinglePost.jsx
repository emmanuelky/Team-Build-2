import { React, useEffect, useState } from "react";
import { useParams, useRouteMatch, withRouter, useHistory } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { Card, Button, Modal, Form } from "react-bootstrap"
import './HomePageLayout/HomePage.css'
import MyNavbar from '../components/MyNavbar'
// import SideBarHome from './HomePageLayout/SideBarHome'
import RightSidebar from '../components/RightSidebar'
import MyFooter from '../components/MyFooter'
import SideBar from '../components/SideBar'

import axios from "axios"




const GetSinglePost = () => {
    const [post, setPosts] = useState([]);

    let history = useHistory();

    const handleClose = () => setShow(true);




    //Edit post
    const [addpost, setAddpost] = useState({
        text: ''
    })
    const [showedit, setShowEdit] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);


    //Post Modal
    const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Single Post Modalbox
    // const [show, setShow] = useState(false);
    // const [showsingle, setShowSingle] = useState(false);

    let match = useRouteMatch("/posts/:id");
    console.log(match);
    let id = match.params.id

    let containInUrlId = id.slice(15)

    console.log(containInUrlId)



    const fetchPosts = async (id) => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/posts/${id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization:
                            " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MzlmNjdiZTZjMTAwMTVmOWRiZDQiLCJpYXQiOjE2MzA5NDM3MzUsImV4cCI6MTYzMjE1MzMzNX0.aqatGQ0--T-ZQWZJQeYBJ0q7JsbxuWlScmsooaM_1ZE",
                    },
                }
            );
            const data = await response.json();
            // console.log(data);
            setPosts(data)
            console.log(post)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPosts(id)

    }, [id]);

    const handleClick = () => {
        history.push("/");
    }

    const fixDate = (date) => {
        try {
            return format(parseISO(date), "h:mm a");
            // MM/dd/yyyy 
        } catch {
            return `Present`;
        }
    };


    //Edit Post 
    // const { text } = addpost

    // const onInputChange = (e) => {
    //     e.preventDefault();
    //     setAddpost({ ...addpost, text: e.target.value });

    // }
    // const handlePostSubmit = async (e) => {
    //     e.preventDefault()
    //     try {

    //         const { data } = await axios.post(
    //             `https://striveschool-api.herokuapp.com/api/posts/`, addpost,
    //             {

    //                 headers: {
    //                     "content-Type": "application/json",
    //                     Authorization:
    //                         " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MzlmNjdiZTZjMTAwMTVmOWRiZDQiLCJpYXQiOjE2MzA5NDM3MzUsImV4cCI6MTYzMjE1MzMzNX0.aqatGQ0--T-ZQWZJQeYBJ0q7JsbxuWlScmsooaM_1ZE",
    //                 },
    //             }
    //         )
    //         // setPosts([...posts, data])
    //         setShow(false)

    //     } catch (error) {
    //         console.log(error);
    //     }
    //     setAddpost({
    //         text: ''
    //     })
    // }





    return (
        <>
            <div>
                <div className="d-flex flex-column align-items-center flex-wrap">
                    <div
                        className="d-flex flex-wraptext-center mb-4"
                        style={{ width: "100vw" }}
                    >
                        <MyNavbar />
                        <h2>navbar</h2>
                    </div>

                    <div className="d-flex flex-wrap my-5">
                        <div className="flex-column flex-wrap home-sidebar-2 m-1">
                            <div id="makeItStick" className=" mb-3">
                                {/* <SideBarHome /> */}
                                <SideBar />
                            </div>
                        </div>
                        <div className="flex-column ml-3 flex-wrap feeds">
                            <div className="sticky mt-5 ml-5 shadow-lg rounded-pill"  >
                                <Modal.Dialog className="sticky post-modal shadow-lg rounded-pill" show={show} onHide={handleClose} >
                                    <Modal.Header closeButton onClick={handleClick}>
                                        {/* <Modal.Title className='text-center post-modal'>Post</Modal.Title> */}
                                    </Modal.Header>

                                    <Modal.Body className='text-center border-lg rounded-pill post-modal'>
                                        <pre></pre> <h3> {post.username}</h3>
                                        <h6>  <q>{post.text}</q></h6>

                                    </Modal.Body>

                                    <div className='text-center mt-5'>
                                        @ <span className="text-muted" style={{ fontSize: '14px' }}>{fixDate(post.createdAt)} • <i class="far fa-clock text-success"></i></span>

                                    </div>

                                    <Modal.Footer>
                                        <Button variant="warning" onClick={handleClick} closeButton>Close</Button>
                                    </Modal.Footer>

                                </Modal.Dialog>
                            </div>
                        </div>
                        <div className="home-sidebar-1 ml-3">
                            <RightSidebar />
                        </div>
                    </div>

                    <div className="w-100">
                        <div>
                            <MyFooter />
                        </div>
                    </div>
                </div>
            </div>









            {/* Edit Post */}

            {/* <Modal show={showedit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    )
}

export default withRouter(GetSinglePost)
