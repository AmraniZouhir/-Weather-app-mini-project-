import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Style from '../SearchBar/styleSearchBar.module.scss'
import { Autocomplete, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { resetData, setData } from '../features/Weather/Weather'
import PositionSvg from '../assets/img/weather/svgs/PositionSvg'

export default function SearchBar() {
    const GEOAPIKEY = process.env.REACT_APP_GEO_API_KEY
    const WEWTHAPIKEY = process.env.REACT_APP_WEATH_API_KEY

    const [cites, setCites] = useState([])
    const [unity, setUnity] = useState('metric')
    const [geoLocation, setgeoLocation] = useState(undefined)
    const dispatche = useDispatch()
    const [isCurrentLocation, setIsCurrentLocation] = useState(false)


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
    const getData =()=>{
        if(geoLocation){
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.lat}&units=${unity}&lon=${geoLocation.lon}&appid=${WEWTHAPIKEY}`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(json => {
                    const { clouds, main, name, sys, weather, wind } = json
                    dispatche(setData({ clouds, main, name, sys, weather, wind }))
                })
        }
      
    }

    const handelChangeSelect = (event, value) => {
        console.log(WEWTHAPIKEY);
        console.log('Received value:', value);

        if (value && value.lat && value.lon) {
            const { lon, lat } = value;
            setIsCurrentLocation(false)

            setgeoLocation({
                lon,
                lat
            })
                
        }
         else   {
            dispatche(resetData());

        } 
    };


    const getGeipoLocation =()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setIsCurrentLocation(true)

            setgeoLocation({
                lon:position.coords.longitude,
                lat:position.coords.latitude
            })
        },(positionError)=>{
        console.log(positionError)
        })
    }
    useEffect(()=>{
       
            getGeipoLocation()

        
    },[]);
    useEffect(()=>{
       getData()
    },[geoLocation]);




    return (
        <>
            {/* <Form>
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
                    <Button disabled={geoLocation === undefined || isCurrentLocation === true} variant="contained" 
                    onClick={() => getGeipoLocation()}><PositionSvg color={'#fff'}/></Button>
         
                            </Form.Group>
            </Form> */}
            <Form>
        <Form.Group className={Style.serchContent}>
          <Autocomplete
            className={Style.serchinput}
            onChange={handelChangeSelect}
            clearOnBlur={false}
            getOptionLabel={(option) => option.formatted}
            renderInput={(params) => (
              <TextField
                onChange={handeleInputeChange}
                {...params}
                label={'Enter your city...'}
              />
            )}
            options={cites}
          />
          <Button
            disabled={geoLocation === undefined || isCurrentLocation === true}
            variant={
              geoLocation === undefined || isCurrentLocation === true
                ? 'contained'
                : 'outlined'
            }
            onClick={() => getGeipoLocation()}
            style={{
              backgroundColor:
                geoLocation === undefined || isCurrentLocation === true
                  ? '#2196F3' // Disabled color
                  : '#888', // Blue color
            }}
          >
            <PositionSvg color={'#fff'} />
          </Button>
        </Form.Group>
      </Form>
        </>
    )
}




