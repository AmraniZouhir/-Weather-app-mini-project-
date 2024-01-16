import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Style from '../SearchBar/styleSearchBar.module.scss'
import { Autocomplete, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setData } from '../features/Weather/Weather'

export default function SearchBar() {
    const GEOAPIKEY = process.env.REACT_APP_GEO_API_KEY
    const WEWTHAPIKEY = process.env.REACT_APP_WEATH_API_KEY

    const [cites, setCites] = useState([])
    const [unity, setUnity] = useState('metric')
    const dispatche = useDispatch()

    const handeleInputeChange = (e) => {
        const { value } = e.currentTarget;
        if (value.trim() === "") {
            // Handle the case where the input is empty
            return;
        }
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
                    console.error('API 1', json);
                }
            })
            .catch(error => {
                // Handle fetch errors
                console.error('Error fetching data:', error);
            });
    }


    const handelChangeSelect = (event, value) => {
        console.log(WEWTHAPIKEY);
        console.log('Received value:', value);
    
        if (value && value.lat && value.lon) {
            const { lon, lat } = value;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=${unity}&lon=${lon}&appid=${WEWTHAPIKEY}`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(json => {
                    const {clouds ,main, name,sys,weather,wind} =json
                    dispatche(setData({clouds ,main, name,sys,weather,wind}))
                })


                .catch(error => console.error('Error:', error));
        } else if (value === null) {
            console.warn('Received null value.');
            // Handle the case when value is null, if needed.
        } else {
            console.error('Invalid value object:', value);
        }
    };
    

    return (
        <>
            <Form>
                <Form.Group className={Style.serchContent}>
                    <Autocomplete className={Style.serchinput}
                        onChange={handelChangeSelect}
                        clearOnBlur={false}
                        getOptionLabel={(Option) => Option.formatted}
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




