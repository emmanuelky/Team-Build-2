import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { Card, Button, Modal, Form } from "react-bootstrap"
import axios from "axios"

const GetSinglePost = ({ id }) => {
    const [posts, setPosts] = useState([]);
    const [showsingle, setShowSingle] = useState(false);

    // const [addpost, setAddpost] = useState({
    //     text: ''
    // })

    // let { id } = useParams();

    // console.log(id)



    useEffect(() => {
        handlePostSubmit()
    }, [id])


    const handlePostSubmit = async (id) => {
        // e.preventDefault()
        try {

            const { data } = await axios.get(
                `https://striveschool-api.herokuapp.com/api/posts/${id}`,
                {

                    headers: {
                        "content-Type": "application/json",
                        Authorization:
                            " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MzlmNjdiZTZjMTAwMTVmOWRiZDQiLCJpYXQiOjE2MzA5NDM3MzUsImV4cCI6MTYzMjE1MzMzNX0.aqatGQ0--T-ZQWZJQeYBJ0q7JsbxuWlScmsooaM_1ZE",
                    },
                }
            )
            // setPosts([...posts, data])
            setPosts([data])
            console.log(posts)
            // setShow(false)

        } catch (error) {
            console.log(error);
        }
        // setAddpost({
        //     text: ''
        // })
    }









    // useEffect(async () => {
    //     let data
    //     if (id) {
    //         data = await fetchSinglePosts(id)
    //         setPosts(data)
    //         console.log(data)
    //     }
    // else {
    //     data = await fetchMe()
    //     setProfileData(data)
    // }
    // }, [id]);

    // const fetchSinglePosts = async (id) => {
    //     try {
    //         const response = await fetch(
    //             `https://striveschool-api.herokuapp.com/api/posts/${id}`,
    //             {
    //                 method: "GET",
    //                 headers: {
    //                     Authorization:
    //                         " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MzlmNjdiZTZjMTAwMTVmOWRiZDQiLCJpYXQiOjE2MzA5NDM3MzUsImV4cCI6MTYzMjE1MzMzNX0.aqatGQ0--T-ZQWZJQeYBJ0q7JsbxuWlScmsooaM_1ZE",
    //                 },
    //             }
    //         );
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log(data);
    //             return data
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const fetchSinglePosts = async (id) => {
    //     try {
    //         const response = await fetch(
    //             `https://striveschool-api.herokuapp.com/api/posts/${id}`,
    //             {
    //                 method: "GET",
    //                 headers: {
    //                     Authorization:
    //                         " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MzlmNjdiZTZjMTAwMTVmOWRiZDQiLCJpYXQiOjE2MzA5NDM3MzUsImV4cCI6MTYzMjE1MzMzNX0.aqatGQ0--T-ZQWZJQeYBJ0q7JsbxuWlScmsooaM_1ZE",
    //                 },
    //             }
    //         );
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log(id);
    //             setPosts(data)
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    // useEffect(() => {

    //     fetchSinglePosts()

    // }, [id]);

    return (
        <div>


            {/* <Modal
                show={showsingle}
                onHide={() => setShowSingle(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>



                    <div><h3>post</h3></div>

                    <div><h3>{posts._id}</h3></div>

                </Modal.Body>
            </Modal> */}
            {/* {
                posts.map(post => post(<>
                    <div><h3>hard</h3></div>

                    <div><h3>{posts._id}</h3></div>
                </>
                ))



            } */}



















            {/* <Modal
                show={showsingle}
                onHide={() => setShowSingle(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde

                    </p>
                </Modal.Body>
            </Modal> */}

        </div>
    )
}

export default GetSinglePost
