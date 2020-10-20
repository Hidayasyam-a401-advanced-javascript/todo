import React from 'react'
import { useState} from 'react'
import { Card,ListGroup,Button, Form } from 'react-bootstrap';
import useForm from '../hooks/useForm'


export default function Form1(props) {
    const [item, setItem] = useState({})

    const [handleSubmit, onChangeHandler, values] = useForm(hookFormParam)

    function hookFormParam(x) {
        props.handleSubmit(x)
   
    }
    return (

        <>
            
            <Card className='card' style={{ width: '24rem', height: '25rem' }}>
                <ListGroup  variant="light" >

                    <Form onSubmit={handleSubmit} style={{ padding:'20px' }}>
                    <h3>Add Item</h3>

                        <Form.Label>
                            <span>To Do Item</span>
                            <Form.Control
                                name="text"
                                placeholder="Add To Do List Item"
                                onChange={onChangeHandler}
                            />
                        </Form.Label>
                        <Form.Label>
                            <span>Difficulty Rating</span>
                            <Form.Control defaultValue="1" type="range" min="1" max="20" name="difficulty" onChange={onChangeHandler} />
                        </Form.Label>
                        <Form.Label>
                            <span>Assigned To</span>
                            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={onChangeHandler} />
                        </Form.Label>
                        <Button variant="primary" type="submit">Add Item</Button >
                    </Form>

                </ListGroup>
            </Card>

        </>
    );



}
