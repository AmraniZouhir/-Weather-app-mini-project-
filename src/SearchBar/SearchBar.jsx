import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Style from '../SearchBar/styleSearchBar.module.scss'
import { Autocomplete, TextField } from '@mui/material'

export default function SearchBar() {
    const GEOAPIKEY = process.env.REACT_APP_GEO_API_KEY
    const [cites ,setCites] = useState([]) 
    const handeleInputeChange = (e) => {
        const { value } = e.currentTarget;
        console.log(GEOAPIKEY);
    
        fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${GEOAPIKEY}`)
            .then(response => response.json())
            .then(json => {
                if (json.results && Array.isArray(json.results)) {
                    setCites(json.results.map(data => {
                        const { lat, lon, city, country, formatted } = data;
                        return { lat, lon, city, country, formatted };
                    }));
                } else {
                    // Handle the case where json.results is undefined or not an array
                    console.error('Invalid data received from the API:', json);
                }
            })
            .catch(error => {
                // Handle fetch errors
                console.error('Error fetching data:', error);
            });
    
        console.log(value);
    }
    
    return (
        <>

            <Form>
                <Form.Group className={Style.serchContent}>
                    <Autocomplete className={Style.serchinput}
                        clearOnBlur={false}
                        getOptionLabel={(Option)=>Option.formatted}
                        renderInput={(prams) =>
                            <TextField onChange={handeleInputeChange}
                            {...prams} label={'Enter your city...'} />}
                        options={cites}>

                    </Autocomplete>
                    <Button size={'sm'} variant='primary'>Serch</Button>
                </Form.Group>
            </Form>
        </>

    )
}




