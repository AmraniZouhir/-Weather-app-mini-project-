import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import style from './Weather.module.scss'
import PositionSvg from '../assets/img/weather/svgs/PositionSvg'
import DefaultWeather from '../assets/img/weather/svgs/DefaultWeather'
import Thermometer from '../assets/img/weather/svgs/Thermometer'
import Time from '../assets/img/weather/svgs/Time'
import Wind from '../assets/img/weather/svgs/Wind'
import { useSelector } from 'react-redux'
import Humidity from '../assets/img/weather/svgs/Humidity'
import SpeedoMeter from '../assets/img/weather/svgs/SpeedoMeter'
import moment from 'moment'; // Import moment
import Moment from "react-moment";

export default function Weather() {
    const weather = useSelector(({ weather }) => weather)

    function convertUnixTimestampToTime(unixTimestamp) {
        // Multiply by 1000 to convert to milliseconds, and create a new Date object
        const date = new Date(unixTimestamp * 1000);

        // Get hours, minutes, and seconds
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const seconds = "0" + date.getSeconds();

        // Format the time as HH:mm:ss
        const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return formattedTime;
    }

    const formattedSunriseTime = moment.unix(weather.sys.sunrise).format('HH:mm:ss');


    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour >= 5 && currentHour < 12) {
            setGreeting('Good Morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }
    }, []); // Run this effect only once when the component mounts
    return (
        <>
            <Card className={style.container}>
                {weather.isLoaded ?
                    <Card.Body>
                        <Card.Title>
                            {weather.name} , {weather.sys.country} <PositionSvg />

                            <div className={style.time}>
                                <div>
                                    <Moment format={'llll'} /></div>
                                <div><Time width={'15px'} height={'15px'} /></div>
                            </div>

                        </Card.Title>
                        <Card.Text as={'div'} className={style.text}>
                            <div><DefaultWeather width={'250px'} height={'250px'} /></div>
                            <div className={style.tempirater}>

                                <div>  {weather.main.feels_like} ° C</div>
                                <div><Thermometer /></div>
                            </div>
                            <div>
                                {greeting} {weather.name}
                                <div className={style.separator}></div>
                            </div>
                            <div className={style.infos}>
                                <div className={style.border_right}>
                                    <div><DefaultWeather color={'#fff'} /></div>
                                    <div>Sunrise</div>
                                    <div>{convertUnixTimestampToTime(weather.sys.sunrise)}</div>
                                </div>

                                <div className={style.border_right}>
                                    <div><Wind /></div>
                                    <div>Wind</div>
                                    <div>{weather.wind.speed} m/s</div>
                                </div>
                                <div className={style.border_right}>
                                    <div><SpeedoMeter /></div>
                                    <div>SpeedoMeter</div>
                                    <div>{weather.main.pressure} Pa</div>
                                </div>
                                <div className={style.border_right}>
                                    <div><Humidity /></div>
                                    <div>Humidity</div>
                                    <div>{weather.main.humidity}%</div>
                                </div>
                                <div>
                                    <div><Thermometer color={'#fff'} width={'40px'} height={'40px'} /></div>
                                    <div>Temp</div>
                                    <div>{weather.main.temp_max} °C</div>
                                </div>
                            </div>

                        </Card.Text>
                    </Card.Body> :
                    <Card.Body>
                        <Card.Title>Please choose your city.</Card.Title>
                    </Card.Body>
                }
            </Card>

        </>
    )
}
