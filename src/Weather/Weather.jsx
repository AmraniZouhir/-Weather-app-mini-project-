import React from 'react'
import { Card } from 'react-bootstrap'
import style from './Weather.module.scss'
import PositionSvg from '../assets/img/weather/svgs/PositionSvg'
import DefaultWeather from '../assets/img/weather/svgs/DefaultWeather'
import Thermometer from '../assets/img/weather/svgs/Thermometer'
import Time from '../assets/img/weather/svgs/Time'

export default function Weather() {
    return (
        <>
            <Card className={style.container}>
                <Card.Body>
                    <Card.Title>
                        Ouarzazate , MA <PositionSvg/>
                        <div className={style.time}> 
                            <div> 15H 22MIN</div>
                            <div><Time/></div>
                        </div>
                    </Card.Title>
                    <Card.Text as={'div'} className={style.text}>
                        <div><DefaultWeather/></div>
                        <div className={style.tempirater}>
                          
                            <div>  35° C</div>
                            <div><Thermometer/></div>
                            
                            </div>
                        
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
}
