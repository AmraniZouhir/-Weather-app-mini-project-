import React from 'react'
import { Card } from 'react-bootstrap'
import style from './Weather.module.scss'
import PositionSvg from '../assets/img/weather/svgs/PositionSvg'
import DefaultWeather from '../assets/img/weather/svgs/DefaultWeather'
import Thermometer from '../assets/img/weather/svgs/Thermometer'
import Time from '../assets/img/weather/svgs/Time'
import Wind from '../assets/img/weather/svgs/Wind'

export default function Weather() {
    return (
        <>
            <Card className={style.container}>
                <Card.Body>
                    <Card.Title>
                        Ouarzazate , MA <PositionSvg/>
                        <div className={style.time}>
                            <div>Saturday , 15:00 AM</div>
                            <div><Time/></div>
                        </div>
                    </Card.Title>
                    <Card.Text as={'div'} className={style.text}>
                        <div><DefaultWeather width={'250px'} height={'250px'} /></div>
                        <div className={style.tempirater}>

                            <div>  35° C</div>
                            <div><Thermometer /></div>
                        </div>
                        <div>
                            Good Morning Ouarzazateee
                            <div className={style.separator}></div>

                        </div>
                        <div className={style.infos}>
                            <div className={style.border_right}>
                                <div><DefaultWeather color={'#fff'} /></div>
                                <div>Sunrise</div>
                                <div>08:00</div>
                            </div>
                            <div className={style.border_right}>
                                <div><Wind /></div>
                                <div>Wind</div>
                                <div>08m/s</div>
                            </div>
                            <div>
                                <div><Thermometer color={'#fff'} width={'40px'} height={'40px'} /></div>
                                <div>Temp</div>
                                <div>35° C</div>
                            </div>
                        </div>

                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
}
