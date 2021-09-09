import React from 'react'
import { Form } from 'react-bootstrap'

const AddPost = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddPost
