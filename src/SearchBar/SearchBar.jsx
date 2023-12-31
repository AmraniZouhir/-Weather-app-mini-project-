import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Style from '../SearchBar/styleSearchBar.module.scss'

export default function SearchBar() {
    return (
        <>
        
            <Form>
                <Form.Group className={Style.serchContent}> 
                    <Form.Label></Form.Label>
                    <Form.Control className={Style.serchinput} size={'lg'} type='text' placeholder='Enter your city...'></Form.Control>
                    <Button size={'sm'} variant='primary'>Serch</Button>
                </Form.Group>
            </Form>
        </>

    )
}




