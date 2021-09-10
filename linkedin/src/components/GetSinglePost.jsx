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

const GetSinglePost = () => {
    const [post, setPosts] = useState([]);

    let history = useHistory();

    const handleClose = () => setShow(true);


    let match = useRouteMatch("/posts/:id");
    console.log(match);
    let id = match.params.id

    let containInUrlId = id.slice(15)

    console.log(containInUrlId)


    const [show, setShow] = useState(false);

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
                        <div className="flex-column ml-5 flex-wrap feeds sticky-top">
                            <div className="sticky-top mt-5 ml-3 shadow-lg rounded-pill"  >
                                <Modal.Dialog className="sticky-top post-modal shadow-lg rounded-pill" show={show} onHide={handleClose} >
                                    <Modal.Header closeButton onClick={handleClick}>
                                        {/* <Modal.Title className='text-center post-modal'>Post</Modal.Title> */}
                                    </Modal.Header>

                                    <Modal.Body className='text-center post-modal'>
                                        <pre></pre> <h3> {post.username}</h3>
                                        <h6>  <q>{post.text}</q></h6>

                                    </Modal.Body>

                                    <div className='text-center mt-5'>
                                        @ <span className="text-muted" style={{ fontSize: '14px' }}>{fixDate(post.createdAt)} • <i class="far fa-clock text-success"></i></span>

                                    </div>
                                    <Modal.Footer>
                                        <Button variant="primary" onClick={handleClick} closeButton>Close</Button>
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
            );

























            {
            }
        </>)
}

export default withRouter(GetSinglePost)
