import React from 'react'
import { Card } from 'react-bootstrap'
import style from './Weather.module.scss'
import PositionSvg from '../assets/img/weather/svgs/PositionSvg'
import DefaultWeather from '../assets/img/weather/svgs/DefaultWeather'
import Thermometer from '../assets/img/weather/svgs/Thermometer'
import Time from '../assets/img/weather/svgs/Time'
import Wind from '../assets/img/weather/svgs/Wind'
import { useSelector } from 'react-redux'

export default function Weather() {
    const weather = useSelector(({weather}) => weather)

    return (
        <>  
            <Card className={style.container}>
                <Card.Body>
                    <Card.Title>
                    {weather.name} , {weather.sys.country} <PositionSvg/>
                        <div className={style.time}>
                            <div>Saturday , 15:00 AM</div>
                            <div><Time/></div>
                        </div>
                    </Card.Title>
                    <Card.Text as={'div'} className={style.text}>
                        <div><DefaultWeather width={'250px'} height={'250px'} /></div>
                        <div className={style.tempirater}>

                            <div>  {weather.main.feels_like} ° C</div>
                            <div><Thermometer /></div>
                        </div>
                        <div>
                            Good Morning  {weather.name}
                            <div className={style.separator}></div>

                        </div>
                        <div className={style.infos}>
                            <div className={style.border_right}>
                                <div><DefaultWeather color={'#fff'} /></div>
                                <div>Sunrise</div>
                                <div>  {weather.sys.sunrise}</div>
                            </div>
                            <div className={style.border_right}>
                                <div><Wind /></div>
                                <div>Wind</div>
                                <div>{weather.wind.speed} m/s</div>
                            </div>
                            <div className={style.border_right}>
                                <div><Wind /></div>
                                <div>Wind</div>
                                <div>{weather.main.pressure} Pa</div>
                            </div>
                            <div className={style.border_right}>
                                <div><Wind /></div>
                                <div>Wind</div>
                                <div>{weather.main.humidity}%</div>
                            </div>
                            <div>
                                <div><Thermometer color={'#fff'} width={'40px'} height={'40px'} /></div>
                                <div>Temp</div>
                                <div>{weather.main.temp_max} °C</div>
                            </div>
                        </div>

                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
}
