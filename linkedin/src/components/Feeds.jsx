import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import { format, parseISO } from "date-fns";
import { Card, Button, } from "react-bootstrap"

const Feeds = () => {
    const [posts, setPosts] = useState([]);
    let { id } = useParams();



    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    `https://striveschool-api.herokuapp.com/api/posts/`,
                    {
                        method: "GET",
                        headers: {
                            Authorization:
                                " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3Mjk5YmIwMWIwZDAwMTUxNjY5MDQiLCJpYXQiOjE2MzEwMDUwODMsImV4cCI6MTYzMjIxNDY4M30.yJM7cebFnDP0ayfuxT3X6Wl47Nhme9pIbmgYBPwhViM",
                        },
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    console.log(posts);
                    setPosts(data)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts()
    }, []);



    return (
        <>
            <Card className="border bg-light">
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

                {posts.slice(0, 50).map(post => (
                    <Card.Body>
                        <div className="border">

                            <Card.Title>{post.username}</Card.Title>
                            <Card.Text>{post.text}
                            </Card.Text>
                        </div>
                    </Card.Body>
                ))

                }
            </Card>



        </>
    );
};

export default Feeds;
