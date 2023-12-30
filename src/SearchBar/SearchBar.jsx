import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function SearchBar() {
    return (
        <>
        
            <Form>
                <Form.Group className='d-flex'> 
                    <Form.Label></Form.Label>
                    <Form.Control type='text' placeholder='Enter your city...'></Form.Control>
                    <Button variant='primary'>Serch</Button>
                </Form.Group>
            </Form>
        </>

    )
}




