import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { apiKey } from './apiKey';

const weatherApp = () => {
    const [city, setCity] = useState("Bengaluru");
    const url = `https://api.openweathermap.org/data/2.5/weatherS`

    useEffect(() =>{
        fetchResult();
    },[city]);

    const fetchResult = async () =>{
        const response = await axios.get(url,{params:{q:city, appid:apiKey},
        });
        console.log("response"+ response);
    };
  return (
    <>
        <h1>hello Weather Application</h1>
    </>
  )
}

export default weatherApp