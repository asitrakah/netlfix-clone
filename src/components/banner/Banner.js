import React,{useEffect, useState} from 'react'
import "./Banner.css"
import axios from "../../axios"
import requests from '../../Request'


function Banner() {

    const[formation , setFormation] = useState([]);


    useEffect(() => {
       async function fetchData(){
           const request = await axios.get(requests.fetchAll);
           setFormation(request.data.records[
               Math.floor(Math.random() * request.data.records.length)
           ]);
           //seturlImage(formation.fields.image[0].url)
          return request;
       }

       fetchData();
    }, []);

  

    console.log(formation);

    function truncate(string, n){
        return string?.length>n ? string.substr(0,n-1) + "...": string;
    }
    return (
        //https://image.tmdb,org/t/p/original/
        <header className="banner"
            style={
                {
                    backgroundSize: "cover",
                    backgroundImage: `url("${formation.fields?.image[0].url}")`,
                    backgroundPosition: "center center",
                }
            } >

            <div className="banner__contents">

                <h1 className="banner__title">
                {formation.fields?.title}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button"> Play </button>
                    <button className="banner__button"> My List </button>
                </div>
                <h1 className="banner__description">
                    {truncate(formation.fields?.description,150)}
                    
                </h1>
            </div>

            <div className="banner--fadeBottom"/>

        </header>
    )
}

export default Banner