import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { Card, Button, Modal, Form } from "react-bootstrap"
import axios from "axios"
import GetSinglePost from "./GetSinglePost"
import EditPost from "./EditPost";



const Feeds = () => {
    const [posts, setPosts] = useState([]);
    const [addpost, setAddpost] = useState({
        text: ''
    })


    //Post Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Single Post Modalbox
    const [showsingle, setShowSingle] = useState(false);



    //FETCH POSTS
    const fetchPosts = async () => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/posts/`,
                {
                    method: "GET",
                    headers: {
                        Authorization:
                            " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MzlmNjdiZTZjMTAwMTVmOWRiZDQiLCJpYXQiOjE2MzA5NDM3MzUsImV4cCI6MTYzMjE1MzMzNX0.aqatGQ0--T-ZQWZJQeYBJ0q7JsbxuWlScmsooaM_1ZE",
                    },
                }
            );
            if (response.ok) {
                const data = await response.json();
                // console.log(posts);
                setPosts(data)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        fetchPosts()

    }, []);


    const fixDate = (date) => {
        try {
            return format(parseISO(date), "h:mm a");
            // MM/dd/yyyy 
        } catch {
            return `Present`;
        }
    };



    //ADD POST

    const { text } = addpost

    const onInputChange = (e) => {
        e.preventDefault();
        setAddpost({ ...addpost, text: e.target.value });

    }
    const handlePostSubmit = async (e) => {
        e.preventDefault()
        try {

            const { data } = await axios.post(
                `https://striveschool-api.herokuapp.com/api/posts/`, addpost,
                {

                    headers: {
                        "content-Type": "application/json",
                        Authorization:
                            " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MzlmNjdiZTZjMTAwMTVmOWRiZDQiLCJpYXQiOjE2MzA5NDM3MzUsImV4cCI6MTYzMjE1MzMzNX0.aqatGQ0--T-ZQWZJQeYBJ0q7JsbxuWlScmsooaM_1ZE",
                    },
                }
            )
            setPosts([...posts, data])
            setShow(false)

        } catch (error) {
            console.log(error);
        }
        setAddpost({
            text: ''
        })
    }




    //Edit posts



    return (
        <>
            <div onClick={handleShow} className="d-flex border bg-white mx-3 ml-4 mb-3" style={{ borderRadius: '12px', border: '1px' }}>
                <div className="mt-1 mx-2 p-2">
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex">
                            <div className="mr-1 align-self-center"><img className="rounded-pill" style={{ width: '50px', height: '50px' }} src="data:image/png;base64,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" alt="" />
                            </div>
                            <div className="mr-2 align-self-center">
                                <Button variant="outline-light secondary" className='rounded-pill border text-left text-muted' size="lg" style={{ width: '438px' }} ><strong><span style={{ fontSize: '14px' }}>Start a post</span></strong>  </Button>
                            </div>
                        </div>
                        <div className="mt-3 d-flex text-muted" style={{ fontSize: '18px' }}>
                            <div className="m-1 mr-4 d-flex" >
                                <div className="align-self-center">
                                    <i class="far fa-image text-primary align-self-center"></i>
                                </div>
                                <div className="align-self-center">
                                    <h6 className="m-1 ml-2 align-self-start ">Photo</h6>
                                </div>
                            </div>

                            <div className="m-1 mr-4 d-flex" >
                                <div className="align-self-center">
                                    <i class="fab fa-youtube text-success align-self-center"></i>
                                </div>
                                <div className="align-self-center">
                                    <h6 className="m-1 ml-2 align-self-start ">Video</h6>
                                </div>
                            </div>
                            <div className="m-1 mr-4 d-flex" >
                                <div className="align-self-center">
                                    <i class="fas fa-calendar-alt text-warning align-self-center"></i>
                                </div>
                                <div className="align-self-center">
                                    <h6 className="m-1 ml-2 align-self-start ">Event</h6>
                                </div>
                            </div>
                            <div className="m-1 mr-4 d-flex" >
                                <div className="align-self-center">
                                    <i class="far fa-newspaper text-danger align-self-center"></i>
                                </div>
                                <div className="align-self-center">
                                    <h6 className="m-1 ml-2 align-self-start ">Write article</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {posts.flat(20).reverse().slice(0, 10).map(post => (<>

                <div key={post.user._id} className="d-flex justify-content-between border bg-white mx-3 ml-4 mb-2" style={{ borderRadius: '12px', border: '1px' }}>
                    <div className="mt-3 mx-3">
                        <div className="d-flex">
                            <img
                                className="rounded-pill"
                                src={post.user.image}
                                alt=""
                                style={{ width: '20px', height: '20px' }}
                            />
                            <div className=" ml-2 d-flex flex-column text-left mb-3">
                                <span style={{ fontSize: '13px' }}><strong>{post.user.name}</strong></span>
                                <span className="text-muted" style={{ fontSize: '11px' }}>1,304 followers</span>
                                <span className="text-muted" style={{ fontSize: '11px' }}>{fixDate(post.createdAt)} • <i class="fas fa-globe-americas"></i></span>

                                <span className="my-3 flex-wrap" style={{ fontSize: '13px' }}>{post.text} </span>


                                <Link to={`/posts/${post._id}`}>
                                    <div onClick={() => setShowSingle(true)}>
                                        <img src={post.user.image} alt="" className="img-fluid" />
                                    </div></Link>

                                <div className="mt-3 d-flex text-muted border-top" style={{ fontSize: '18px' }}>
                                    <div className="m-2">
                                        <i class="far fa-thumbs-up"></i>
                                        <span className="m-1">Like</span>
                                    </div>

                                    <div className="m-2">
                                        <i class="far fa-comment-dots"></i>
                                        <span className="m-1">Comment</span>
                                    </div>

                                    <div className="m-2">
                                        <i class="fas fa-share"></i>
                                        <span className="m-1">Share</span>
                                    </div>
                                    <div className="m-2">
                                        <i class="fas fa-paper-plane"></i>
                                        <span className="m-1">Send</span>
                                    </div>


                                    {/* Edit Post */}

                                    <div className="m-2">
                                        {/* <i class="far fa-edit text-success align-self-center"></i>
                                        <span className="m-1">Edit post</span> */}
                                        {/* <EditPost /> */}
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="mt-3">
                        <div id="eduIconColor" className="mb-4 mr-3">
                            {" "}
                            •••
                        </div>
                    </div>
                </div>

            </>


            ))

            }


            <Modal show={show} onHide={handleClose} >
                <div className="d-flex flex-column">


                    <Modal.Header closeButton >
                        <Modal.Title>Create a post</Modal.Title>
                    </Modal.Header>
                    <div className="d-flex">
                        <div className='ml-3 mr-1 my-3'> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUA/4QNDg4NAAAA/4cA/4oNAAYKhkkIsF0InlQLbTwNAAkNCg0NAAgC9YAE3nUF028KfEMIpFcMPSQNKRoNBgwGxWgLYTYD6XoE5HgNFBEF2XILaDkJjUwMSSoHvGMMUy8IqloJlVAD8H4KgkcMQycHwGYJk08LWTIGy2sNIxgMNiELZDgMMB4NGRMKcz8NHRTWnNHNAAAFiklEQVR4nO2da3vaPAyGW8uhNJzKW0YZpfS0nujG/v+/G1TpBjSJ7NixxPXq/l6uPJH9RJZl9+REURRFURRFURRFURRFURRFURRFURRFURRFURRFUf4XQADcz+4AWHgdLzrNGI/ka7TzaxNEZyBaI8C1yU5D6BmztNwyqoFZboL0ocaFWIkwM3mwwA2mK1Ui5FEEbiQOZc5Fex4+RJF8JTKIMIolcBPEM4lBtJeRxujp1m0EKoRxvBBugnghb5wOYgqUaDb2OuxLf0j+n7AgxrQZRJrZxLQZRJjZxLUZxDxKGqeRbaaQOOOW9Y/YNoPkP8QEMb7NIGYpZSrGtxmkl3ErK2jDZhDTkTFOW7GZQqIIs7HnbdgM0r8REMS2bAaRYDZt2QzSy9gVtmczCL/ZtGgzhcQrXoHtZDO79G9Zg9iuzSDmiXMqtmszSC9nVNi2zSCcNfDWbaaQyGY27dsMknGZTQqbQcw3nqmYwmaQySmLwjQ2g5hnDomJbKaQ+JBeYCqbQbKX5GaTzmYQ85p6nKazmUJhJ7HClDaDCseJFTaymV6/eRPKW1p9jWozmTHTRbchZ4kFNrCZ3FyPrD2abjB/mzGroWWvuLgDd74hNBfHpG+j8N1zFvKXkzyBjl8Ms+mRCfT9VgjbzXUCuj4SJdStvYG3ifsYTZ80RwBe3YPIsfCJgJ262imZUMLJg8ggPzgGkez8sWNjVhLDDPduEqk9zo/xnonstoRTF7Mxz8Szw/ftz0hrgPoAnhyC2H8jntxi8iDzk2lv+3QIR/VPDsPiNclqgPpkRgaR7BK1Pz8XKTJ6Eg6wVHray4lf2MmNRPQkfCXr1YeQKsZf7bwikbkdLGuDmL1TY/RmZyazbhNWYn/UrPV7ZlD/13C294JkHpUZ1gSR/MYNzP4g5+5JKMVeVEokreNLaitzEQKmymyoJQV8+/JyuLYJa6ksSpkutaTof3k3k18CFe58s/cgTy6Vjm9zL1AizEuDSB0Iqagpi1wtl55YI52/ogxCfkJZKCm8kRPKPldNXyJVZ6Fko418zsqkPb+UGET7drCMMmvKZlaVuVDyfUIXDgtv5HK2bnuVzPVYOMhOyFVCbRWLHAAs7D0ymXzZ29pKpJlLHKe7hTdySVG/5hJ6zBkrZijwjpqFlans5y+ILLz9TaPJ41j0mXbhhTdqkeey4yGz8FaUXMjcGXoOhWSZhbfFVmJ+SaVrjy6bAbnIwhtsb/2gnB7qyh67QRRZeJsbY+6oJYVjm4qAw0AlAAypxh7XDSuphTeaK1eBQgtvJLXl1QPY+vND8GulEll4IzisANcz+X50Cu2NX68YmeBKo6Y8XqHw8agUgl179zNK/OpXAXa28hWY/oKagNse7Xztf5Fb8kuGYHnWkO560uCmweQXRcHv5m32xF54KclXwbBIfbwidSUDkh5yYrEZ7971MBjuMnNd2EUSyHAfXdKjajzFtpTHDZkKpumOjHJdt+fXnx8C25WJ8Nu9Pz9IINu1lz79+QFw1vTd+/NDYN2Xce3PD4H3Vk/3cmdzmG9mhV9tmw337bqtmw3/1qF9addsBGz/tms2Ei4PbtdsRFwAvdOTEF+giEu8S1p7Y8FvMwjR7xOAAJtBPDYBvZBgM0hlb2ggImwGgUmDAigtUITNIE4nD32RYjOIy8lDX8TYDBLfbOTYDGKjF/kF2QwCeVyzkWQzCNUF64ksm0H2DkcGI8xmEPqYszvSbAYhjzl7IM5mCpps7ZYLFGczSDSzycU2P0X6N2u5uZKq8MS+RJBocrkCP1KbwNVwZt5l/+NRO5tuu0kasvnT6UimyexgB8vF+rwR6/unwVHcxBfQDXYM8hRFURRFURRFURRFURRFURRFURRFURRFURRFURQlEn8A9uhZWIyTtXAAAAAASUVORK5CYII="
                            className="rounded-pill"
                            alt=""
                            style={{ width: '50px', height: '50px' }} /></div>
                        <div className='align-self-center text-center'>
                            <Button variant="outline-light secondary" className='rounded-pill border text-center text-muted ' size="sm" style={{ width: '200px' }} ><strong>
                                <div className="d-flex align-items-center " style={{ fontSize: '14px' }}>
                                    <i class="fas fa-exclamation mx-2"></i><span style={{ fontSize: '14px' }} className="mx-4">Tarun</span><i class="fas fa-caret-down mx-5"></i> </div></strong>  </Button>

                        </div>
                        <div className='align-self-center text-center mx-1'>
                            <Button variant="outline-light secondary" className='rounded-pill border text-center text-muted ' size="sm" style={{ width: '120px' }} ><strong>
                                <div className="d-flex align-items-center " style={{ fontSize: '14px' }}>
                                    <i class="fas fa-globe-africa mx-1"></i><span style={{ fontSize: '14px' }} className="mx-1">Anyone</span><i class="fas fa-caret-down mx-1"></i> </div></strong>  </Button>

                        </div>
                    </div>


                    {/* Add Post */}
                    <Modal.Body >
                        <Form onSubmit={handlePostSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                <Form.Control
                                    className="text-area"
                                    as="textarea"
                                    placeholder="What do you want to talk about? I will complete the styling later today guys"
                                    rows={3}
                                    value={text}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </Form.Group>
                        </Form></Modal.Body>
                    {/* <Modal.Footer> */}
                    <div className="d-flex flex-column " >

                        <div className="text-left ml-3">
                            <div><a href=""><strong>Add Hashtags</strong> </a></div>
                        </div>
                        <div className="d-flex m-2 mx-1 text-muted " style={{ fontSize: '25px' }}>
                            <div className="m-2">
                                <i class="far fa-image"></i>

                            </div>

                            <div className="m-2">
                                <i class="fab fa-youtube"></i>
                            </div>

                            <div className="m-2">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <div className="m-2">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <div className="m-2">
                                <i class="fas fa-bahai"></i>
                            </div>
                            <div className="m-2">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <div className="m-2">
                                <span>•••</span>
                            </div>
                            <div className="m-2">
                                <span>|</span>
                            </div>
                            <div className="m-2">
                                <i class="far fa-comment-dots mr-1"></i>
                                <span >Anyone</span>
                            </div>



                            {/* <Button variant="success" className="m-1">
                                Update
                            </Button> */}
                            <div>

                                <button className="ml-4 btn btn-primary" onClick={handlePostSubmit} >
                                    Post
                                </button>
                            </div>

                        </div>

                    </div>
                    {/* </Modal.Footer> */}
                </div>
            </Modal>




            <Modal
                show={showsingle}
                onHide={() => setShowSingle(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">

                    </Modal.Title>
                </Modal.Header >
                <Modal.Body>

                    {/* {posts} */}
                    {/* {console.log(posts.flat(20))} */}

                    <GetSinglePost />


                </Modal.Body>
            </Modal >





        </>
    );
};

export default Feeds;
